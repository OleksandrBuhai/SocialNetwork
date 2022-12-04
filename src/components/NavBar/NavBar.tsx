import React from 'react';
import c from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <a href={"/profile"} className={c.active}>Profile</a>
            </div>
            <div className={c.item}>
                <a href={"/dialogs"}>Dialogs</a>
            </div>
            <div className={c.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
};

export default NavBar;