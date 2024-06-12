import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import MainComponent from './components/MainComponent';
import LanguageSwitcher from './components/LanguageSwitcher';
import './App.css';

const App = () => {
    return (
        <LanguageProvider>
            <div className="app">
                <LanguageSwitcher />
                <MainComponent />
            </div>
        </LanguageProvider>
    );
};

export default App;