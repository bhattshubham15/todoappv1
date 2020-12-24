import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import NavItems from './NavItems'

export default class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-light bg-light d-flex justify-content-center">
                <Link to="/" className="navbar-brand">
                    <h1>Todoapp</h1>
                </Link>
                <NavItems/>
            </div>
        )
    }
}
