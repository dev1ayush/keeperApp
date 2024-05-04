import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { NotesContext } from "../contex/Notes-Context";

function EditNote({ editModeOn, setEditModeOn }) {
  console.log(editModeOn);
  const { id } = editModeOn;
  const { notes, editNote } = useContext(NotesContext);

  let [{ title, text }] = notes.filter((note, index) => {
    return index === id;
  });

  console.log(title, text);

  const [newState, setNewState] = useState({
    title: "",
    text: "",
  });

  useEffect(() => {
    setNewState({ title, text });
  }, [title, text]);

  const handleEditNote = (e) => {
    e.preventDefault();
    editNote(id, newState);
    setEditModeOn({ ...editModeOn, mode: false });
  };

  const handleCancelEditing = (e) => {
    e.preventDefault();
    setEditModeOn({ ...editModeOn, mode: false });
  };

  return (
    <div className="edit-modal">
      <h1 style={{ textAlign: "center" }}>edit note</h1>
      <div className="form-container">
        <form className="Input" action="">
          <input
            onChange={(e) =>
              setNewState({ ...newState, title: e.target.value })
            }
            value={newState.title}
            type="text"
            placeholder="title"
          />
          <textarea
            onChange={(e) => setNewState({ ...newState, text: e.target.value })}
            value={newState.text}
            name=""
            id=""
            placeholder="text"
          ></textarea>
          <button onClick={handleEditNote}>save</button>
          <button onClick={handleCancelEditing}>cancel</button>
        </form>
      </div>
    </div>
  );
}

export default EditNote;
