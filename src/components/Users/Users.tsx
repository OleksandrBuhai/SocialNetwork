import React from "react";
import { v1 } from "uuid";
import { userType } from "../../redux/users-reducer";

type usersPagePropsType = {
    users: Array<userType>
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setUsers: (users: Array<userType>) => void
}


export const Users: React.FC<usersPagePropsType> = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: v1(), photoUrl: 'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/16:9/w_2560%2Cc_limit/1521-WIRED-Cat.jpeg', followed: true, fullName: 'Alex', status: 'I am lazy', location: { city: 'Mlada-Boleslav', country: 'Czechia' } },
            { id: v1(), photoUrl: 'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/16:9/w_2560%2Cc_limit/1521-WIRED-Cat.jpeg', followed: true, fullName: 'Alex', status: 'I am lazy', location: { city: 'Mlada-Boleslav', country: 'Czechia' } },
            { id: v1(), photoUrl: 'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/16:9/w_2560%2Cc_limit/1521-WIRED-Cat.jpeg', followed: false, fullName: 'Alex', status: 'I am lazy', location: { city: 'Mlada-Boleslav', country: 'Czechia' } },
            { id: v1(), photoUrl: 'https://media.wired.co.uk/photos/60c8730fa81eb7f50b44037e/16:9/w_2560%2Cc_limit/1521-WIRED-Cat.jpeg', followed: false, fullName: 'Alex', status: 'I am lazy', location: { city: 'Mlada-Boleslav', country: 'Czechia' } },
        ])
    }

    return (
        <div>
            {
                props.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <img width='30px' src={el.photoUrl} />
                        </div>
                        <div>
                            {el.followed ? <button onClick={() => {
                                debugger;
                                props.unFollow(el.id)
                            }}>Follow</button>
                                : <button onClick={() => { props.follow(el.id) }}>Unfollow</button>}
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
            }
        </div>
    )
}