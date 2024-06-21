import React, { Component } from 'react';

export class Notes extends Component {
    render() {
        return (
            <div className='note'>
                <h1 className='Title'>{this.props.Name}</h1>
                <p className='Text'>{this.props.Descr}</p>
            </div>
        );
    }
}

export default Notes;
