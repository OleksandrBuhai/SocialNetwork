import React from "react";
import style from './Users.module.css'
import {userType} from "../../../redux/users-reducer";
import {NavLink} from "react-router-dom";


type usersPagePropsType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    userPhoto: string
    follow: (userId: number) => void,
    unFollow: (userId: number) => void,
    setCurrentPage: (currentPage: number) => void
    onPageChange: (pageNumber: number) => void
    toggleFollowingInProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
}


const Users = (props: usersPagePropsType) => {

    /*    let pageCount = Math.ceil(props.totalUsersCount / props.pageSize)*/
    let pages: Array<number> = []
    for (let i = 1; i <= 20; i++) {
        pages = [...pages, i]
    }

    return <div>
        <div>
            {pages.map((el, index) => {
                return <span key={index} className={props.currentPage === el ? style.selectedPage : ""}
                             onClick={() => {
                                 props.onPageChange(el)
                             }}>{el}</span>
            })}
        </div>
        {
            props.users.map(el => <div key={el.id}>
                <span>
                    <NavLink to={"/profile/" + el.id}>
                        <div>
                            <img width='100px' src={el.photos.small != null ? el.photos.small : props.userPhoto}/>
                        </div>
                    </NavLink>
                    <div>
                        {el.followed ?
                            <button disabled={props.followingInProgress.some(id => id === el.id)}
                                    onClick={() => {
                                        props.unFollow(el.id)
                                    }}>
                                Unfollow</button> :
                            <button disabled={props.followingInProgress.some(id => id === el.id)}
                                    onClick={() => {
                                        props.follow(el.id)
                                    }}>
                                Follow</button>}
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
