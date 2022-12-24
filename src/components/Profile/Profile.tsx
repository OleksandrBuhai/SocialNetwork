import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type profilePropsType = {
    posts: Array<postsType>
    addPost: () => void
    updateNewPostText:(e: string) => void
}
type postsType = {
    message: string,
    likescount: number
}

const Profile = (props: profilePropsType) => {

    return (
        <div>
            <ProfileInfo/>
            <MyPosts posts={props.posts} addPost={props.addPost} updateNewPostText={props.updateNewPostText}/>
        </div>
    );
};

export default Profile;