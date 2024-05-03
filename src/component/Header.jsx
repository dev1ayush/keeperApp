import React, { useContext } from 'react';
import Search from './Search'
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import ToggleOffIcon from '@mui/icons-material/ToggleOff';
import { themeContext } from '../contex/theme-Contex';

function Header({ handleSearch }) {
    const { darkMode, setDarkMode } = useContext(themeContext);
    return (
        <div className='header' >
            <div className='name'>
            <h1>keeper</h1>
            </div>
            <div className='search-container'>
                <Search handleSearch={handleSearch} />
                {darkMode ? <ToggleOnIcon onClick={ setDarkMode} className='toggle-on' sx={{ mr: '10px', ml: '10px', cursor:"pointer"}} fontSize='large'/> :
                <ToggleOffIcon onClick={setDarkMode} className='toggle-off' sx={{ mr: '10px', ml:'10px', cursor:"pointer"}} fontSize='large'/>}
            </div>
               
        </div>
    );
}

export default Header;