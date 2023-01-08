import React from 'react';
import Search from './Search'
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';

function Header({handleSearch,isToggleOn,setIsToggleOn}) {
    return (
        <div className='header' >
            <div className='name'>
            <h1>keeper</h1>
            </div>
            <div className='search-container'>
                <Search handleSearch={handleSearch} />
                {isToggleOn ? <ToggleOnIcon onClick={()=>setIsToggleOn((prevState)=>!prevState)} className='toggle-on' sx={{ mr: '10px', ml:'10px'}} fontSize='large'/> :
                <ToggleOffIcon onClick={()=>setIsToggleOn((prevState)=>!prevState)} className='toggle-off' sx={{ mr: '10px', ml:'10px'}} fontSize='large'/>}
            </div>
               
        </div>
    );
}

export default Header;