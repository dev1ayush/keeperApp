import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Note({ title, content, handleDelete, id }) {
  function handleClick() {
    handleDelete(id)
  }
  return (
    <div className='Note'>
      <div className='note-content'>
      <h4>{title}</h4>
        <p>{content}</p> 
      </div>
      <div className='btn-container'>
        <DeleteForeverIcon onClick={handleClick} className='delete-btn' fontSize='small'/>
      </div>
    </div>
  )
}

export default Note;
