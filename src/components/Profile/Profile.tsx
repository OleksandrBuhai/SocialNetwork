import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType} from "../../redux/state";

type profilePropsType = {
    posts: Array<postsType>
    dispatch:(e:ActionsType)=>void
}
type postsType = {
    message: string,
    likecount: number
}

const Profile:React.FC<profilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}  dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;