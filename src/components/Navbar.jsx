import React from 'react';

const Navbar = ({ mode, toggleMode }) => {
    return (
        <nav className="navbar border-bottom border-body" id='Nav'>
            <h1>Keeper App</h1>
            <span
                id="Darkmode"
                className="material-symbols-outlined"
                style={{ fontSize: "36px", cursor: "pointer" }}
                onClick={toggleMode}
            >
                {mode === 'dark' ? 'dark_mode' : 'light_mode'}
            </span>
        </nav >
    );
};

export default Navbar;

