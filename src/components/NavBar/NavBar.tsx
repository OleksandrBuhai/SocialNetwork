import React from 'react';

const NavBar = () => {
    return (
       <nav className={'nav'}>
           <div>
               <a>Profile</a>
           </div>
           <div>
               <a>Messages</a>
           </div>
           <div>
               <a>Settings</a>
           </div>
       </nav>
    );
};

export default NavBar;