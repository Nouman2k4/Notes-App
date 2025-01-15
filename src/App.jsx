import React, { useState } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Input from './components/imput';
import defaultContacts from "./contact";

const App = () => {
    const [mode, setMode] = useState('light');
    const [contacts, setContacts] = useState(defaultContacts);

    const customStyle = {
        display: 'flex',
        flexDirection: 'row',
        gap: '20px',
        flexWrap: 'wrap',
    };

    const toggleMode = () => {
        if (mode === 'dark') {
            setMode('light');
            applyLightModeStyles();
        } else {
            setMode('dark');
            applyDarkModeStyles();
        }
    };

    const applyLightModeStyles = () => {
        document.body.style.backgroundColor = 'white';
        document.body.style.color = 'black';
        document.title = "Light Mode Enabled";
    };

    const applyDarkModeStyles = () => {
        document.body.style.backgroundColor = '#042743';
        document.body.style.color = 'white';
        document.title = "Dark Mode Enabled";
    };

    const addContact = (contact) => {
        setContacts(prevContacts => [...prevContacts, contact]);
    };

    const deleteContact = (index) => {
        const idx = parseInt(index, 10);
        if (!isNaN(idx)) {
            setContacts(prevContacts => prevContacts.filter((_, i) => i !== idx));
        }
        else {
            alert("Invalid index")
        }
    };

    return (
        <div>
            <Navbar mode={mode} toggleMode={toggleMode} />
            <div className='container' style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', gap: '20px', width: "100vw" }}>
                <div className="container" style={customStyle}>
                    {contacts.map((contact, index) => (
                        <Notes key={index} index={index} Name={contact.title} Descr={contact.description} isDarkMode={mode === 'dark'} />
                    ))}
                </div>
                <Input addContact={addContact} deleteContact={deleteContact} />
            </div>
            <Footer />
        </div>
    );
};

export default App;
