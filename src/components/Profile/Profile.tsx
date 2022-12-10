import React from 'react';
import MyPosts from "./MyPosts/MyPosts";

type profilePropsType = {
    posts: Array<postsType>
}
type postsType = {
    message: string,
    likescount: number
}

const Profile = (props: profilePropsType) => {

    return (
        <div>
            <img src={'https://victoria.mediaplanet.com/app/uploads/sites/102/2019/07/mainimage-26-888x500.jpg'}/>
            <div>
                ava+descriptions
            </div>
            <MyPosts posts={props.posts}/>
        </div>
    );
};

export default Profile;