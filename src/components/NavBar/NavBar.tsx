import React from 'react';
import c from './NavBar.module.css'

const NavBar = () => {
    return (
       <nav className={c.nav}>
           <div className={c.item}>
               <a className={c.active}>Profile</a>
           </div>
           <div className={c.item}>
               <a>Messages</a>
           </div>
           <div className={c.item}>
               <a>Settings</a>
           </div>
       </nav>
    );
};

export default NavBar;