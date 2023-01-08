import React, { useState , useId } from 'react';
import './App.css';
import Header from './component/Header';
import Note from './component/Note';
import Footer from './component/Footer';
import Input from './component/Input';
function App() {
  const [noteData, setNoteData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [isToggleOn, setIsToggleOn] = useState(false);

  function notesData(data) {
    setNoteData([...noteData, data]);
  }

  function handleDelete(id) {
    setNoteData(noteData.filter((note, index) => {
      return id !== index;
    }))
  }

  return (
    <div className={isToggleOn && "toggle-on"}>
      <Header isToggleOn={isToggleOn} setIsToggleOn={setIsToggleOn} handleSearch={setSearchValue} />
      <Input sendData = {notesData} />
      <div className='Note-Container'>
      {noteData.filter((note)=>note.text.toLowerCase().includes(searchValue)).map((item, index) => {
          return <Note handleDelete={handleDelete} id={index} key={index} title={item.title} content={item.text} />
        })  
      }
      </div>
      <Footer />
    </div>
  );
}

export default App;
