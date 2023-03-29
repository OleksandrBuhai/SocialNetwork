import * as axios from "axios";
import React from "react";
import userPhoto from "../../axios/usersImage/images.jpg";
import { userType } from "../../redux/users-reducer";

type usersPagePropsType = {
    users: Array<userType>
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setUsers: (users: Array<userType>) => void
}


class Users extends React.Component<usersPagePropsType>{
    constructor(props:usersPagePropsType) {
        super(props);
        axios.default.get("https://social-network.samuraijs.com/api/1.0/users").then(response=>
        props.setUsers(response.data.items)
        )
    }
    render(){
       return <div>
        {
            this.props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img width='100px' src={el.photos.small != null ? el.photos.small : userPhoto } />
                    </div>
                    <div>
                        {el.followed ? <button onClick={() => {
                            this.props.unFollow(el.id)
                        }}>Follow</button>
                            : <button onClick={() => { this.props.follow(el.id) }}>Unfollow</button>}
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
    }

}

export default Users