import React from 'react';
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {

    let posts = [
        {message: "hello", likescount: 5},
        {message: "hello", likescount: 5},
        {message: "hello", likescount: 5}
    ]

    return (
        <div>
            <img src={'https://victoria.mediaplanet.com/app/uploads/sites/102/2019/07/mainimage-26-888x500.jpg'}/>
            <div>
                ava+descriptions
            </div>
            <MyPosts posts={posts}/>
        </div>
    );
};

export default Profile;