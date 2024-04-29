import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";

const Card = (props) => {
  const { note, handleDelete, handleEditNotes,  } = props;
  const handleEdit = () => {
     handleEditNotes(note);

  };

  return (
    <div key={note.id} className="note">
      <div className="note-content">
        <b>{note.header}</b>
        <br />
        {note.content}
      </div>

      <div className="note-footer">
        <div>
          {note && (
            <span className="date">
              {" on "}
              {note.created_at === note.updated_at
                ? note.created_at?.substring(0, 10)
                : note.updated_at?.substring(0, 10)}
              {" at "}
              {note.created_at === note.updated_at
                ? note.created_at?.substring(11, 19)
                : note.updated_at?.substring(11, 19)}
            </span>
          )}
        </div>
        <div>
          <span className="edit-icon" onClick={handleEdit}>
            <MdEdit />
          </span>
          <span onClick={() => handleDelete(note.id)} className="delete-icon">
            <MdDelete />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
