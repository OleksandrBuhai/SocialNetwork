import * as axios from "axios";
import React from "react";
import { userType } from "../../../redux/users-reducer";
import userPhoto from "./../../../axios/usersImage/images.jpg";
import style from "./Users.module.css";

type usersPagePropsType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
}


class Users extends React.Component<usersPagePropsType>{

    componentDidMount(): void {
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        }
        )
    }

    onPageChange = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>
            this.props.setUsers(response.data.items)
        )
    }

    render() {

        let pageCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= 15; i++) {
            pages.push(i)
        }

        return <div>
            <div>
                {pages.map((el, index) => {
                    return <span key={index} className={this.props.currentPage === el ? style.selectedPage : ""}
                        onClick={() => { this.onPageChange(el) }}>{el}</span>
                })}
            </div>
            {
                this.props.users.map(el => <div key={el.id}>
                    <span>
                        <div>
                            <img width='100px' src={el.photos.small != null ? el.photos.small : userPhoto} />
                        </div>
                        <div>
                            {el.followed ? <button onClick={() => { this.props.unFollow(el.id) }}>Follow</button>
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