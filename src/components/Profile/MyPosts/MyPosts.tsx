import React from 'react';
import Posts from "./Posts/Posts";

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
            My Post
            <div>
                <textarea></textarea>
                <button>add</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>

    );
};

export default MyPosts;