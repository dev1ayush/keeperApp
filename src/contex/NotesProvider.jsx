import React, { useEffect } from 'react'
import { NotesContext } from './Notes-Context';
import { useState } from 'react';

function NotesProvider(props) {

   
    const [noteData, setNoteData] = useState(() => {
        const savedNotes = JSON.parse(localStorage.getItem('notes'));
         if (savedNotes) {
            return savedNotes
         } else {
            return [];
        }
    });
    
    //setting into local storage

    useEffect(() => {
        localStorage.setItem('notes', JSON.stringify(noteData));
    }, [noteData]);
    
    const addNewNote = (data) => {
        setNoteData((prev) => {
            return [...prev, data];
        });
    };

    const deleteNote = (id) => {
        setNoteData(
            noteData.filter((note, index) => {
              return id !== index;
            })
          );
    }
  
    return (
        <NotesContext.Provider value={{ notes:noteData, addNotes:addNewNote , deleteNote:deleteNote}}>
            {props.children}
        </NotesContext.Provider>
    )
}

export default NotesProvider