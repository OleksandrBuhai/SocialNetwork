import React from 'react';
import c from './Header.module.css'
import { NavLink } from 'react-router-dom';
import { authMePropsType } from '../../redux/auth-reducer';


const Header = (props: authMePropsType) => {
    return (
        <header className={c.header}>
            <img className={c.img} src={"https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"} />
            <div className={c.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>Login</NavLink>
                }
            </div>
        </header>
    );
};

export default Header;