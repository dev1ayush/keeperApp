import { useState } from 'react';
import { themeContext } from './theme-Contex';

function ThemeProvider(props) {
    const [isToggleOn, setIsToggleOn] = useState(false);

    const setDarkMode = () => {
        setIsToggleOn(prev => !prev);
    };

    return (
        <themeContext.Provider value={{
            darkMode: isToggleOn,
            setDarkMode
        }}>
            {props.children}
      </themeContext.Provider>
  )
}

export default ThemeProvider