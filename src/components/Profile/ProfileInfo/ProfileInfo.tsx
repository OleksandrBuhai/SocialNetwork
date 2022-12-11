import React from 'react';
import c from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={c.desriptionBlock} >
            <img className={c.img} src={'https://victoria.mediaplanet.com/app/uploads/sites/102/2019/07/mainimage-26-888x500.jpg'} />
            <div className={c.post}>
                ava+descriptions
            </div>
        </div>
    );
};

export default ProfileInfo;