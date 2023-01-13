import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {storeType} from "../../../redux/redux-state";

type ProfileType = {
    store:storeType
}



const MyPostsContainer = (props:ProfileType) => {

    const posts = props.store.getState().profilePage

    const addPost = () => {
        props.store.dispatch(addPostActionCreator())

    }

    const onPostChange = (text:string) => {
        let newText = updateNewPostTextActionCreator(text)
        props.store.dispatch(newText)
    }


    return (
        <MyPosts   addPost={addPost} onPostChange={onPostChange} posts={posts} newPostText={posts.newPostText}/>
    )
};

export default MyPostsContainer;