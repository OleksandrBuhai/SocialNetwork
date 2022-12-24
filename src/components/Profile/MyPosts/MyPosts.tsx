import React, {ChangeEvent} from 'react';
import Posts from "./Posts/Posts";
import c from "./MyPosts.module.css"

type MyPostsPropsType = {
    posts: Array<postsType>
    addPost: () => void
    updateNewPostText: (e: string) => void
}
type postsType = {
    message: string
    likescount: number
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(el => <Posts message={el.message} likescount={el.likescount}/>)


    let newPostElementValue = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.addPost()
    }

    const onPostChange = () => {
        if (newPostElementValue.current) {
            let text = newPostElementValue.current.value
            props.updateNewPostText(text)
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