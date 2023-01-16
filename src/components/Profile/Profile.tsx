import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ActionsType, PostType, ProfilePageType, RootStateType, StoreType} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {storeType} from "../../redux/redux-state";

type profilePropsType = {

}
type postsType = {
    message: string,
    likecount: number
}

const Profile:React.FC<profilePropsType> = (props) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
            {/*<MyPosts posts={props.posts}  dispatch={props.dispatch}/>*/}
        </div>
    );
};

export default Profile;