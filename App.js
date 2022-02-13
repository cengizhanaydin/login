import React from 'react';
import Root from './app/screens';
import AuthProvider from './app/contexts/AuthContext';
import ThemeProvider from './app/contexts/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Root />
      </AuthProvider>
    </ThemeProvider>
  );
};



export default App;
