import React from 'react';
import c from './ProfileInfo.module.css'
import { profileAPItype } from '../../../redux/profile-reducer';
import Preloader from '../../../common/Preloader/Preloader';
import avatar from '../../../axios/usersImage/images.jpg'
import {ProfileStatus} from "./ProfileStatus";

type profileInfoType = { profile: profileAPItype | null,
status:string,
    updateStatus:(status:string)=>void}


const ProfileInfo = (props: profileInfoType) => {
    console.log(props.status + '4oho pusto')
    if (!props.profile) {
        return <Preloader />
    }
    else {
        return (
            <div className={c.desriptionBlock} >
                <img className={c.img} src={'https://victoria.mediaplanet.com/app/uploads/sites/102/2019/07/mainimage-26-888x500.jpg'} />
                <div className={c.post}>
                    <img
                        src={props.profile.photos.large ? props.profile.photos.large : avatar} alt={'avatar'}/>
                    <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
                </div>
            </div>
        );
    }
};

export default ProfileInfo;