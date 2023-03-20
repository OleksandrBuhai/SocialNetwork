import React from "react";
import { userType } from "../../redux/users-reducer";

type usersPagePropsType = {
    users: Array<userType>
    follow: (userId:string)=>void,
    unFollow: (userId:string)=>void,
}


export const Users: React.FC<usersPagePropsType> = (props) => {

    let users = props.users.map(el=><div key={el.id}>
        <span>
            <div>
                <img width='30px' src={el.photoUrl}/>
            </div>
            <div>
                <button>Follow</button>
            </div>
        </span>
        <span>
            <span>
                <div>{el.fullName}</div>
                <div>{el.status}</div>
            </span>
            <span>
                <div>{el.location.country}</div>
                <div>{el.location.city}</div>
            </span>
        </span>

    </div>)

    return (
        <div>
         {users}
        </div>
    )

}