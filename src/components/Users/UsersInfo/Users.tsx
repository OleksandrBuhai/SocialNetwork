import React from "react";
import style from './Users.module.css'
import { userType } from "../../../redux/users-reducer";


type usersPagePropsType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    userPhoto: string
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChange: (pageNumber: number) => void
}


const Users = (props: usersPagePropsType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 15; i++) {
        pages.push(i)
    }

    return <div>
        <div>
            {pages.map((el, index) => {
                return <span key={index} className={props.currentPage === el ? style.selectedPage : ""}
                    onClick={() => { props.onPageChange(el) }}>{el}</span>
            })}
        </div>
        {
            props.users.map(el => <div key={el.id}>
                <span>
                    <div>
                        <img width='100px' src={el.photos.small != null ? el.photos.small : props.userPhoto} />
                    </div>
                    <div>
                        {el.followed ? <button onClick={() => { props.unFollow(el.id) }}>Follow</button>
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
}

export default Users
