import React from 'react';
import Posts from "./Posts/Posts";
import c from "./MyPosts.module.css"

type MyPostsPropsType = {
    posts: Array<postsType>
}
type postsType = {
    message: string
    likescount: number
}

const MyPosts = (props: MyPostsPropsType) => {

    let postsElements = props.posts.map(el => <Posts message={el.message} likescount={el.likescount}/>)

    return (
        <div>
            <h3 className={c.header}> My Post</h3>
            <div className={c.elements}>
                <textarea className={c.textArea}></textarea>
                <button className={c.button}>add</button>
            </div>
            <div className={c.item}>
                {postsElements}
            </div>
        </div>

    );
};

export default MyPosts;