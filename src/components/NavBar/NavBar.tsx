import React from 'react';
import c from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";
import StoreContext from '../../StoreContext';

type NavBar = {}

const NavBar = (props:NavBar) => {
    return (
    <StoreContext.Consumer>
        {(store)=>{
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
                        <Friends state={store.getState().sidebar.friends}/>
                    </div>
                </nav>
            );
        }
        }
    </StoreContext.Consumer>
    )
};

export default NavBar;