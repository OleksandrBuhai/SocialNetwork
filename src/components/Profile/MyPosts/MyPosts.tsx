import React from 'react';
import Posts from "./Posts/Posts";
import c from "./MyPosts.module.css"
import {ActionsType,} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profile-reducer";

type MyPostsPropsType = {
    posts: Array<postsType>
    dispatch:(e:ActionsType)=>void
}
type postsType = {
    message: string
    likecount: number
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map((el,index) => <Posts key={index} message={el.message} likescount={el.likecount}/>)


    let newPostElementValue = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.dispatch(addPostActionCreator())
        if (newPostElementValue.current){
            newPostElementValue.current.value=""
        }
    }

    const onPostChange = () => {

        if (newPostElementValue.current) {
            let text = newPostElementValue.current.value
            props.dispatch(updateNewPostTextActionCreator(text))
        }
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