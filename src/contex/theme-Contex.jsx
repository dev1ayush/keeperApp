import { createContext } from "react";

export const themeContext = createContext({
    darkMode: false,
    setDarkMode:()=>{}
});
