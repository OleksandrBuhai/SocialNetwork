import React from 'react';
import c from './Profile.module.css'


const Profile = () => {
    return (
        <div className={c.content}>
            <img src={'https://victoria.mediaplanet.com/app/uploads/sites/102/2019/07/mainimage-26-888x500.jpg'}/>
            <div>
                ava+descriptions
            </div>
            <div>
                My Post
                <div>
                    My Post1
                </div>
                <div>
                    My post2
                </div>
                <div>
                    My post3
                </div>
            </div>

        </div>

    );
};

export default Profile;