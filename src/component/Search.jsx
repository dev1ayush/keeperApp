import React, { useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';

function Search({handleSearch}) {
  function handlerChange(e) {
    const value = e.target.value;
    handleSearch(value);
  }
  return (
      <div className='search'>
      <SearchIcon className='search-icon' fontSize='small' />
      <input onChange={handlerChange} placeholder='search here...' className='search-box' type="text" />
    </div>
  )
}
export default Search;