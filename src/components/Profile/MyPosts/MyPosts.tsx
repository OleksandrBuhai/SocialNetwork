import React, {ChangeEvent} from 'react';
import Posts from "./Posts/Posts";
import c from "./MyPosts.module.css"
import {ActionsType, ProfilePageType,} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: ProfilePageType,
    addPost: (e:string) => void
    onPostChange: (e: string) => void
    newPostText:string
}
type postsType = {
    id:string
    message: string
    likecount: number
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.posts.map((el, index) => <Posts key={index} message={el.message}
                                                              likescount={el.likecount}/>)


    let newPostElementValue = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.addPost(props.newPostText)
    }

    const onPostChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
       props.onPostChange(e.currentTarget.value)
    }

    return (
        <div>
            <h3 className={c.header}> My Post</h3>
            <div className={c.elements}>
                <textarea className={c.textArea} ref={newPostElementValue} onChange={onPostChange}></textarea>
                <button className={c.button} onClick={addPost}>add
                </button>
            </div>
            <div className={c.item}>
                {postsElements}
            </div>
        </div>

    );
};

export default MyPosts;