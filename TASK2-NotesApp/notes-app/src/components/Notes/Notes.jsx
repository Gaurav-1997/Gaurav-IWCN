import React from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { toast } from "react-hot-toast";
import { deleteNote, getNotesData, postNotesData } from "../../utils/helper";
import Card from "../Card/Card";
import "./styles.css";
import Modal from "../Modal/Modal";

const Notes = () => {
  const [notesHeader, setNotesHeader] = React.useState("");
  const [content, setContent] = React.useState("");
  const [notesData, setNotesData] = React.useState([]);
  const [show, setShow] = React.useState(false);
  const [noteToEdit, setNoteToEdit] = React.useState({});
  const [isOpen, setIsOpen] = React.useState(false);
  const [isEdited, setIsEdited] = React.useState(false);

  const handleCloseModal = () => setIsOpen(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    handleCloseModal();
  };

  const inputRef = React.useRef(null);
  const textRef = React.useRef(null);

  React.useEffect(() => {
    getData();

    if (notesData.length > 0) {
      toast.success("Notes fetched successfully");
    }
  }, [isEdited]);

  const getData = async () => {
    const data = await getNotesData();
    setNotesData(data);
  };

  const handleClickOutside = (e) => {
    if (
      inputRef.current &&
      !inputRef.current.contains(e.target) &&
      textRef.current &&
      !textRef.current.contains(e.target)
    ) {
      setShow(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [show]); // Re-attach listener on isOpen change

  const handleInput = (e) => {
    if (e.target.value.length > 0) {
      setShow(true);
    }
    setNotesHeader(e.target.value);
  };

  const addNotes = (event) => {
    {
      if (event.key === "Enter") {
        if (!notesHeader) alert("Please give some header");
        if (!content) alert("Please enter some content");
        const newNotes = {
          id: notesData.length + 1,
          header: notesHeader,
          content: content,
        };

        postNotesData({ header: notesHeader, content: content });
        const updatedNotes = [...notesData, newNotes];
        setNotesData(updatedNotes);
        setShow(false);
        setNotesHeader("");
        setContent("");
        console.log(notesData);
      }
    }
  };

  const handleEditNotes = (noteData) => {
    setIsOpen(true);
    setNoteToEdit(noteData);
  };

  const handleDelete = async (id) => {
    const status = await deleteNote(id);
    if (status === 200) {
      toast.success("Note deleted successfully");
      let updatedNotesData = notesData.filter((note) => note.id !== id);
      setNotesData(updatedNotesData);
    }
  };

  return (
    <div>
      <header>
        <div>
          <HiMenuAlt2 />
        </div>
        <div>Notes</div>
      </header>
      <div className="container">
        <div className="notes-input">
          <div className="input-box">
            <input
              type="text"
              placeholder="Take a note..."
              ref={inputRef}
              value={notesHeader}
              onChange={handleInput}
              onKeyDown={addNotes}
              onFocus={() => setShow(true)}
            />
            {show && (
              <textarea
                ref={textRef}
                className="note-input"
                placeholder="Add notes content here"
                value={content}
                onChange={(e) => setContent(e.target.value)}
                onKeyDown={addNotes}
              ></textarea>
            )}
          </div>
        </div>
        <div className="notes-content-area">
          {notesData.map((note) => (
            <Card
              note={note}
              handleDelete={handleDelete}
              handleEditNotes={handleEditNotes} 
              />
            ))}
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmit}
        note={noteToEdit}
        setNotesData={setNotesData}            
        notesData={notesData}
        setIsEdited={setIsEdited}
        isEdited={isEdited}
      />
    </div>
  );
};

export default Notes;
