import React, {ChangeEvent} from 'react';
import Posts from "./Posts/Posts";
import c from "./MyPosts.module.css"
import { PostType } from '../../../redux/profile-reducer';


type MyPostsPropsType = {
    posts:Array<PostType>,
    newPostText:string
    addPost: () => void
    onPostChange: (e: string) => void
}

export const MyPosts: React.FC<MyPostsPropsType> = (props) => {

    let postsElements = props.posts.map((el, index) => <Posts key={index} message={el.message}
                                                                    likescount={el.likecount}/>)

    let newPostElementValue = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        props.addPost()
    }

    const onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onPostChange(e.currentTarget.value)
    }

    return (
        <div>
            <h3 className={c.header}> My Post</h3>
            <div className={c.elements}>
                <textarea className={c.textArea} ref={newPostElementValue} onChange={onPostChange}
                          value={props.newPostText}></textarea>
                <button className={c.button} onClick={addPost}>add
                </button>
            </div>
            <div className={c.item}>
                {postsElements}
            </div>
        </div>

    );
};

