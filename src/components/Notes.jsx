import React, { Component } from 'react';

class Notes extends Component {
    render() {
        const { index, Name, Descr, isDarkMode } = this.props;

        // Define styles for light mode and dark mode
        const lightModeStyle = {
            backgroundColor: '#ffffff', // Light mode background color
            color: '#000000' // Light mode text color
        };

        const darkModeStyle = {
            backgroundColor: '#042743', // Dark mode background color
            color: '#ffffff' // Dark mode text color
        };

        // Determine which style object to use based on isDarkMode
        const noteStyle = isDarkMode ? darkModeStyle : lightModeStyle;

        return (
            <div className='note' style={noteStyle}>
                {console.log(index)}
                <h1 className='Title'>{index}. {Name}</h1>
                <p className='Text'>{Descr}</p>
            </div>
        );
    }
}

export default Notes;
