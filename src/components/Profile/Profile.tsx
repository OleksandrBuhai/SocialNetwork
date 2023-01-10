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
    likescount: number
}

const Profile = (props: profilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts}  dispatch={props.dispatch}/>
        </div>
    );
};

export default Profile;