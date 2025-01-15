import React, { Component } from 'react';

const customStyle = {
    width: "30vw",
    height: "100%",
};

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            description: "",
            DeleteNote: -1 // Initial state for DeleteNote
        };
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({
            [name]: value
        });
    };

    handleSubmit = (e) => {
        e.preventDefault(); // Prevent default form submission
        const { title, description } = this.state;

        this.props.addContact({ title, description }); // Call parent method to add contact

        this.setState({ title: "", description: "" });
    };

    handleDeleteChange = (e) => {
        this.setState({ DeleteNote: e.target.value });
    };

    handleDeleteSubmit = (e) => {
        e.preventDefault();
        const { DeleteNote } = this.state;
        this.props.deleteContact(DeleteNote); // Call parent method to delete contact
        this.setState({ DeleteNote: "" });
    };

    render() {
        return (
            <div className="d-flex justify-content-between">
                <div>
                    <form className="input-form" onSubmit={this.handleSubmit}>
                        <div className="mb-3" style={customStyle}>
                            <label htmlFor="titleInput" className="form-label">Enter your Title</label>
                            <input
                                type="text"
                                className="form-control"
                                id="titleInput"
                                name="title"
                                value={this.state.title}
                                onChange={this.handleChange}
                            />
                            <label htmlFor="descriptionTextarea" className="form-label">Enter your note</label>
                            <textarea
                                className="form-control"
                                id="descriptionTextarea"
                                name="description"
                                rows="6"
                                value={this.state.description}
                                onChange={this.handleChange}
                            ></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
                <div className='mx-3'>
                    <form onSubmit={this.handleDeleteSubmit}>
                        <label htmlFor="DeleteInput" className="form-label">Enter Note No to Delete</label>
                        <input
                            type="text"
                            className="form-control"
                            id="DeleteInput"
                            name="DeleteNote"
                            onChange={this.handleDeleteChange}
                        />
                        <button type="submit" className="btn btn-primary mt-4">Delete</button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Input;
