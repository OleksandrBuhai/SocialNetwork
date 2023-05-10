import React from "react";
import style from './Users.module.css'
import { followingInProgressType, userType } from "../../../redux/users-reducer";
import { NavLink } from "react-router-dom";
import axios from "axios";


type usersPagePropsType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    userPhoto: string
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    onPageChange: (pageNumber: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}


const Users = (props: usersPagePropsType) => {

    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages: Array<number> = []
    for (let i = 1; i <= 20; i++) {
        pages = [...pages, i]
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
                    <NavLink to={"/profile/" + el.id}>
                        <div>
                            <img width='100px' src={el.photos.small != null ? el.photos.small : props.userPhoto} />
                        </div>
                    </NavLink>
                    <div>
                        {el.followed ?
                            <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                                props.toggleFollowingInProgress(true, el.id);
                                axios.delete(`https://social-network.samuraijs.com/api/1.0//follow/${el.id}`, {
                                    withCredentials: true,
                                    headers: { "API-KEY": "ac60c106-0830-42a0-92c3-38d641ee1afd" }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.unFollow(el.id)
                                    }
                                    props.toggleFollowingInProgress(false, el.id);
                                })
                            }}>Unfollow</button> : <button disabled={props.followingInProgress.some(id => id === el.id)} onClick={() => {
                                props.toggleFollowingInProgress(true, el.id);
                                axios.post(`https://social-network.samuraijs.com/api/1.0//follow/${el.id}`, {}, {
                                    withCredentials: true,
                                    headers: { "API-KEY": "ac60c106-0830-42a0-92c3-38d641ee1afd" }
                                }).then(response => {
                                    if (response.data.resultCode === 0) {
                                        props.follow(el.id)
                                    }
                                    props.toggleFollowingInProgress(false, el.id);
                                })
                            }}>Follow</button>}
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
