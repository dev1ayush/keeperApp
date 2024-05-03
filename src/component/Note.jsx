import React from "react";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import EditIcon from "@mui/icons-material/Edit";
import { useContext } from "react";
import { NotesContext } from "../contex/Notes-Context";

function Note({ title, content, id, setEditModeOn, editModeOn }) {
  const date = new Date();
  const { deleteNote } = useContext(NotesContext);
  return (
    <div className="Note">
      <div className="note-content">
        <h4>{title}</h4>
        <p>{content}</p>
      </div>
      <div className="btn-container">
        <div>{date.toLocaleDateString()}</div>
        <div className="btn-btn">
          <EditIcon onClick={() => setEditModeOn({ mode: true, id })} />
          {!editModeOn.mode && (
            <DeleteForeverIcon
              onClick={() => deleteNote(id)}
              className="delete-btn"
              fontSize="small"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Note;
