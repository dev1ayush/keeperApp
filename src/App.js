import React, { useContext, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Note from "./component/Note";
import Footer from "./component/Footer";
import Input from "./component/Input";
import EditNote from "./component/EditNote";
import { themeContext } from "./contex/theme-Contex";
import { NotesContext } from "./contex/Notes-Context";
function App() {
  const { darkMode } = useContext(themeContext);
  const [searchValue, setSearchValue] = useState("");
  const [editModeOn, setEditModeOn] = useState({ mode: false, id: "" });
  const { notes } = useContext(NotesContext);

  return (
    <div className={darkMode && "toggle-on"}>
      <Header handleSearch={setSearchValue} />
      <div className="main-container">
        <Input />
        <div className="Note-Container">
          {notes
            .filter((note) => note.text.toLowerCase().includes(searchValue))
            .map((item, index) => {
              return (
                <Note
                  setEditModeOn={setEditModeOn}
                  editModeOn={editModeOn}
                  id={index}
                  key={index}
                  title={item.title}
                  content={item.text}
                />
              );
            })}
        </div>

        {editModeOn.mode && (
          <EditNote setEditModeOn={setEditModeOn} editModeOn={editModeOn} />
        )}
        <Footer />
      </div>
    </div>
  );
}

export default App;
