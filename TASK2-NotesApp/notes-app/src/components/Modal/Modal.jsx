import React from "react";
import "./styles.css";
import { editNote } from "../../utils/helper";
import { MdClose } from "react-icons/md";

const Modal = (props) => {
  const { isOpen, onClose, note, setNotesData, notesData,setIsEdited,isEdited } = props;
  const [header, setHeader] = React.useState();
  const [content, setContent] = React.useState();

  React.useEffect(() => {
    setHeader(note?.header);
    setContent(note?.content);
  }, [note]);
  if (!isOpen) return null;

  const handleEditRequest = async () => {
    const updatedNote = await editNote({ id: note?.id, header, content });
    let newNotes = notesData;
    newNotes[updatedNote.id] = newNotes;
    setNotesData(newNotes);
    onClose();
    setIsEdited(!isEdited);
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          <MdClose fill="#e8e8da" />
        </button>
        <h2>Edit Note</h2>
        <>
          <div className="input-group">
            <label htmlFor="title">Header:</label>
            <input
              type="text"
              id="header"
              name="header"
              value={header}
              onChange={(e) => setHeader(e.target.value)}
              required
            />
          </div>
          <div className="textarea-group">
            <label htmlFor="content">Content:</label>
            <textarea
              id="content"
              name="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              required
            ></textarea>
          </div>
          <button type="submit" onClick={handleEditRequest}>
            Save Note
          </button>
        </>
      </div>
    </div>
  );
};
export default Modal;
