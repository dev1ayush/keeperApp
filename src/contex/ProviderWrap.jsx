import React from 'react';
import NotesProvider from './NotesProvider';
import ThemeProvider from './ThemeProvider';
import App from '../App';

function ProviderWrap() {
    return (
        <ThemeProvider>
            <NotesProvider>
                <App></App>
            </NotesProvider>
      </ThemeProvider>
  )
}

export default ProviderWrap