import React, { Component } from 'react'


let Dat = new Date();
let Year = Dat.getFullYear()

export class Footer extends Component {

    render() {
        return (
            <footer >
                <p >© {Year} Company, Inc</p>
            </footer>
        )
    }
}

export default Footer
