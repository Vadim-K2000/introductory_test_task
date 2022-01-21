import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"
import { mdiNintendoWii } from '@mdi/js';
import Icon from '@mdi/react'

const Header = () => {

    return <header className="Header">
        <Icon path={mdiNintendoWii}
        size={3}
        color="white"/>
        <div className="Menu">
            <Link to="/">Home</Link>
            <Link to="/form">Form</Link>
        </div>
    </header>
}

export default Header;