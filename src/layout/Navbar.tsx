import React from 'react'
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">pet-1 project</Link>

                    <Link className="btn btn-outline-light" to="/adduser">Add User</Link>
                </div>
            </nav>
        </div>
    );
}