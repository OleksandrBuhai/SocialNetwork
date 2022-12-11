import React from 'react';
import c from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const NavBar = (props:any) => {
    return (
        <nav className={c.nav}>
            <div className={c.item}>
                <NavLink
                    to="/profile"
                    activeClassName={c.activeLink}
                >
                    Profile
                </NavLink>
            </div>
            <div className={c.item}>
                <NavLink
                    to="/dialogs"
                    activeClassName={c.activeLink}
                >
                    Dialogs
                </NavLink>
            </div>
            <div className={c.item}>
                <a>Settings</a>
            </div>
            <div>
                <Friends state={props.state.friends}/>
            </div>
        </nav>
    );
};

export default NavBar;