import React from 'react';
import c from './Friends.module.css'

type FriendsType = {
    id:number
    name:string
    avatar:string
}

const Friend: React.FC<FriendsType> = (props) => {
    return (
        <div className={c.friendElement}>
            <div><img src={props.avatar}  className={c.friendAvatar}/></div>
            <div className={c.friendAvatar}>{props.name}</div>
        </div>
    );
};

export default Friend;