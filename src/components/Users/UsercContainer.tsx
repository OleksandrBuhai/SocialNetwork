import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { Dispatch } from 'redux';
import userPhoto from "../../axios/usersImage/images.jpg";
import { AppStateType } from "../../redux/redux-state";
import { followAC, setCurentPageAC, setTotalUsersCountAC, setUsersAC, tooglePreloaderAC, unfollowAC, userType } from "../../redux/users-reducer";
import Users from "./UsersInfo/Users";
import Preloader from "../../common/Preloader/Preloader";


type mapStateToPropsType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
}

type mapDispatchToPropsType = {
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setUsers: (users: Array<userType>) => void,
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalUsersCount: number) => void
    tooglePreloader: (isFetching: boolean) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching
    }
}


type usersPagePropsType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (userId: string) => void
    unFollow: (userId: string) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    tooglePreloader: (isFetching: boolean) => void
}


class UsersAPIContainer extends React.Component<usersPagePropsType>{

    componentDidMount(): void {
        this.props.tooglePreloader(false)
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.tooglePreloader(true)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount)
        }
        )
    }

    onPageChange = (pageNumber: number) => {
        this.props.tooglePreloader(false)
        this.props.setCurrentPage(pageNumber)
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            setTimeout(() => { this.props.tooglePreloader(true) }, 1500)
        }
        )
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader /> : null}
                <Users users={this.props.users} pageSize={this.props.pageSize} totalUsersCount={15} currentPage={this.props.currentPage} userPhoto={userPhoto} follow={this.props.follow}
                    unFollow={this.props.unFollow}
                    setUsers={this.props.setUsers}
                    setCurrentPage={this.props.setCurrentPage}
                    setTotalUsersCount={this.props.setTotalUsersCount}
                    onPageChange={this.onPageChange} />
            </>
        )
    }
}


export const UsersContainer = connect(mapStateToProps, {
    follow: followAC,
    unFollow: unfollowAC,
    setUsers: setUsersAC,
    setCurrentPage: setCurentPageAC,
    setTotalUsersCount: setTotalUsersCountAC,
    tooglePreloader: tooglePreloaderAC
})(UsersAPIContainer)