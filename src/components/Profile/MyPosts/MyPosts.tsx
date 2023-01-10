import React, {ChangeEvent} from 'react';
import Posts from "./Posts/Posts";
import c from "./MyPosts.module.css"
import {ActionsType} from "../../../redux/state";

type MyPostsPropsType = {
    posts: Array<postsType>
    dispatch:(e:ActionsType)=>void
}
type postsType = {
    message: string
    likescount: number
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map((el,index) => <Posts key={index} message={el.message} likescount={el.likescount}/>)


    let newPostElementValue = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.dispatch({type: "ADD-POST"})
    }

    const onPostChange = () => {
        if (newPostElementValue.current) {
            let text = newPostElementValue.current.value
            props.dispatch({type: "UPDATE-NEW-POST-TEXT", newText:text})
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