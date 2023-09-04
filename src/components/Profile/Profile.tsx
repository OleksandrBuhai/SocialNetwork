import React from 'react';
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { PostType, profileAPItype } from '../../redux/profile-reducer';

type profilePropsType = {
    posts: Array<PostType>
    newPostText: string
    setProfilePage: (profile: profileAPItype) => void
    profile: profileAPItype | null
    status:string
    updateStatus:(status:string)=>void
}

const Profile: React.FC<profilePropsType> = (props:profilePropsType) => {

    return (
        <div>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
            <MyPostsContainer />
        </div>
    );
};



export default Profile;