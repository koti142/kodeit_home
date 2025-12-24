import React from 'react';
import { DarkModeProvider } from './contexts/DarkModeContext';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <DarkModeProvider>
      <div className="min-h-screen">
        <Header />
        <Home />
      </div>
    </DarkModeProvider>
  );
}

export default App;

