import React, { useContext, useState } from "react";
import "./App.css";
import Header from "./component/Header";
import Note from "./component/Note";
import Footer from "./component/Footer";
import Input from "./component/Input";
import { themeContext } from "./contex/theme-Contex"
import { NotesContext } from "./contex/Notes-Context";
function App() {
  const { darkMode } = useContext(themeContext);
  const [searchValue, setSearchValue] = useState("");
  const {notes} = useContext(NotesContext);

  return (
      <div className={darkMode && "toggle-on"}>
        <Header
          handleSearch={setSearchValue}
        />
        <Input/>
        <div className="Note-Container">
          {notes
            .filter((note) => note.text.toLowerCase().includes(searchValue))
            .map((item, index) => {
              return (
                <Note
                  id={index}
                  key={index}
                  title={item.title}
                  content={item.text}
                />
              );
            })}
        </div>
        <Footer />
      </div>
  );
}

export default App;
