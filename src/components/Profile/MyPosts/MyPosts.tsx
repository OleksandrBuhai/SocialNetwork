import React from 'react';
import Posts from "./Posts/Posts";



const MyPosts = () => {
    return (

        <div>
            My Post
            <div>
                <textarea></textarea>
                <button>add</button>
            </div>
            <div>
                <Posts message={'Hello'}/>
            </div>
        </div>

    );
};

export default MyPosts;