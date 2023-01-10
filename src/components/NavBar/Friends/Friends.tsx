import React from 'react';
import Friend from "./Friend/Friend";
import c from './Friends.module.css'

type FriendsType = {
    id: number,
    name: string,
    avatar: string
}
type FriendsPropType = {
    state: Array<FriendsType>
}

const Friends: React.FC<FriendsPropType> = (props) => {

    let friendsElement = props.state.map((el,index)=> <Friend key={index} id={el.id} name={el.name} avatar={el.avatar}/>)

    return (
        <div className={c.friendsElement}>
            <div className={c.fiendsText}>Friends</div>
            <div className={c.friendsItems}>{friendsElement}</div>
        </div>
    );
};

export default Friends;