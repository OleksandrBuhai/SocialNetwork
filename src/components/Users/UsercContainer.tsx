import * as axios from "axios";
import React from "react";
import { connect } from "react-redux";
import userPhoto from "../../axios/usersImage/images.jpg";
import Preloader from "../../common/Preloader/Preloader";
import { AppStateType } from "../../redux/redux-state";
import { followAC, followingInProgressType, setCurentPageAC, setTotalUsersCountAC, setUsersAC, toggleFollowingProgressAC, tooglePreloaderAC, unfollowAC, userType } from "../../redux/users-reducer";
import Users from "./UsersInfo/Users";
import { usersAPI } from "../../api/api";


type mapStateToPropsType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
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
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress
    }
}


type usersPagePropsType = {
    users: Array<userType>
    pageSize: number
    totalUsersCount: number
    currentPage: number
    isFetching: boolean
    follow: (userId: number) => void
    unFollow: (userId: number) => void
    setUsers: (users: Array<userType>) => void
    setCurrentPage: (currentPage: number) => void
    setTotalUsersCount: (totalCount: number) => void
    tooglePreloader: (isFetching: boolean) => void
    toggleFollowingProgress:(isFetching:boolean,userId:number)=>void
    followingInProgress:Array<number>
}


class UsersAPIContainer extends React.Component<usersPagePropsType>{

    componentDidMount(): void {
        this.props.tooglePreloader(false)
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.tooglePreloader(true)
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount)
        }
        )
    }

    onPageChange = (pageNumber: number) => {
        this.props.tooglePreloader(false)
        this.props.setCurrentPage(pageNumber)
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.tooglePreloader(true)
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
                onPageChange={this.onPageChange} followingInProgress={this.props.followingInProgress} toggleFollowingInProgress={this.props.toggleFollowingProgress} />
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
    tooglePreloader: tooglePreloaderAC,
    toggleFollowingProgress:toggleFollowingProgressAC
})(UsersAPIContainer)