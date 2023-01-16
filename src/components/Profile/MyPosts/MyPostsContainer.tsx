import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";
import {storeType} from "../../../redux/redux-state";
import StoreContext from '../../../StoreContext';

type ProfileType = {
    store: storeType
}
type ProfilePageType = {}

const MyPostsContainer = (props: ProfilePageType) => {

    return (
        <StoreContext.Consumer>
            {(store)=>{
                const posts = store.getState().profilePage

                const addPost = () => {
                   store.dispatch(addPostActionCreator())
                }

                const onPostChange = (text: string) => {
                    let newText = updateNewPostTextActionCreator(text)
                   store.dispatch(newText)
                }


                return (
                    <MyPosts addPost={addPost} onPostChange={onPostChange} posts={posts} newPostText={posts.newPostText}/>
                )
            }}
        </StoreContext.Consumer>
    )


};

export default MyPostsContainer;