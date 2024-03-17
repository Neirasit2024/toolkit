import React from 'react';
import "./header.css"
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header id='header'>
            <div className="container">
                <div className="header">
                    <div className="header_logo">
                        <Link to="">Todo</Link>
                    </div>
                    <div className="header_pages">
                        <Link to="/home">Home</Link>
                        <Link to="/favorite">Favorite</Link>
                        <Link to="/admin">Admin</Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;