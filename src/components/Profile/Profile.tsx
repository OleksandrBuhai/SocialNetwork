import React from 'react';
import c from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";


const Profile = () => {
    return (
        <div className={c.content}>
            <img src={'https://victoria.mediaplanet.com/app/uploads/sites/102/2019/07/mainimage-26-888x500.jpg'}/>
            <div>
                ava+descriptions
            </div>
            <MyPosts/>
        </div>
    );
};

export default Profile;