import React from 'react';
import { Navbar } from 'reactstrap';
import { Link, Outlet } from 'react-router-dom';

export default function Dashboard() {
    return (
        <div className='container'>
            <Navbar
                className="my-2 h2"
                color="info"
                dark
            >
                <Link className='nav-link' to="/">
                    Home
                </Link>
                <Link className='nav-link' to="/user">
                    User
                </Link>
                <Link className='nav-link' to="/profile">
                    Profile
                </Link>
            </Navbar>
            <Outlet />
        </div>
    )
}
