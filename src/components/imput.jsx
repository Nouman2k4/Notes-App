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
            description: ""
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

    render() {
        return (
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
        );
    }
}

export default Input;
