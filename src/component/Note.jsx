import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { useContext } from 'react';
import { NotesContext } from '../contex/Notes-Context';

function Note({ title, content, id }) {
  const date = new Date();
  const { deleteNote } = useContext(NotesContext);
  return (
    <div className='Note'>
      <div className='note-content'>
      <h4>{title}</h4>
        <p>{content}</p> 
      </div>
      <div className='btn-container'>
        <div>{date.toLocaleDateString()}</div>
        <DeleteForeverIcon onClick={()=>deleteNote(id)} className='delete-btn' fontSize='small'/>
      </div>
    </div>
  )
}

export default Note;
