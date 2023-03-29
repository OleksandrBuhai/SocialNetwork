import * as axios from "axios";
import React from "react";
import { v1 } from "uuid";
import { userType } from "../../redux/users-reducer";
import userPhoto from "../../axios/usersImage/images.jpg";

type usersPagePropsType = {
    users: Array<userType>
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setUsers: (users: Array<userType>) => void
}


 const UsersE: React.FC<usersPagePropsType> = (props) => {

    
    const getUser = ()=>{
        if (props.users.length === 0) {
        axios.default.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>
        props.setUsers(response.data.items)
        )
    }
    }
    

    return (
        <div>
            <button onClick={getUser}>Get User</button>
            {
                props.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <img width='100px' src={el.photos.small != null ? el.photos.small : userPhoto } />
                        </div>
                        <div>
                            {el.followed ? <button onClick={() => {
                                props.unFollow(el.id)
                            }}>Follow</button>
                                : <button onClick={() => { props.follow(el.id) }}>Unfollow</button>}
                        </div>
                    </span>
                    <span>
                        <span>
                            <div>{el.name}</div>
                            <div>{el.status}</div>
                        </span>
                    </span>
                </div>)
            }
        </div>
    )
}