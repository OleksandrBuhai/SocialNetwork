import React from 'react';
import c from './Header.module.css'


type HeaderPropsType = {
    isAuth:boolean
    login:string
}

const Header = (props:HeaderPropsType) => {
    return (
        <header className={c.header}>
            <img className={c.img} src={"https://upload.wikimedia.org/wikipedia/commons/3/3c/IMG_logo_%282017%29.svg"}/>
        </header>
    );
};

export default Header;