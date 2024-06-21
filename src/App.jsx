import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Notes from "./components/Notes";
import Input from './components/imput';
import defaultContacts from "./contact"; // Renamed to avoid confusion with state

const customStyle = {
    display: 'flex', flexDirection: 'row', gap: '20px',
    flexWrap: 'wrap',
}

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: defaultContacts // Initialize with default contacts
        };
    }

    addContact = (contact) => {
        this.setState(prevState => ({
            contacts: [...prevState.contacts, contact]
        }));
    };

    render() {
        return (
            <div>
                <Navbar />
                <div className='container' style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'column', gap: '20px', width: "100vw" }}>
                    <div className="container" style={customStyle}>
                        {this.state.contacts.map((contact, index) => (
                            <Notes key={index} Name={contact.title} Descr={contact.description} />
                        ))}
                    </div>
                    <Input addContact={this.addContact} />
                </div>
                <Footer />
            </div>
        );
    }
}

export default App;
