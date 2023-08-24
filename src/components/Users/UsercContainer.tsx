import React from "react";
import {connect} from "react-redux";
import userPhoto from "../../axios/usersImage/images.jpg";
import Preloader from "../../common/Preloader/Preloader";
import {AppStateType} from "../../redux/redux-state";
import {
    followThunk,
    getUsers,
    setCurentPageAC,
    toggleFollowingProgressAC,
    unfollowThunk,
    userType
} from "../../redux/users-reducer";
import Users from "./UsersInfo/Users";
import {withRouter} from "react-router-dom";
import {compose} from "redux";


type mapStateToPropsType = {
    users: Array<userType>,
    pageSize: number,
    totalUsersCount: number,
    currentPage: number
    isFetching: boolean
    followingInProgress: Array<number>
    isAuth:boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.userPage.users,
        pageSize: state.userPage.pageSize,
        totalUsersCount: state.userPage.totalUsersCount,
        currentPage: state.userPage.currentPage,
        isFetching: state.userPage.isFetching,
        followingInProgress: state.userPage.followingInProgress,
        isAuth:state.auth.isAuth
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
    setCurrentPage: (currentPage: number) => void
    toggleFollowingProgress: (isFetching: boolean, userId: number) => void
    followingInProgress: Array<number>
    getUsers: (currentPage: number, pageSize: number) => void
}


class UsersAPIContainer extends React.Component<usersPagePropsType> {

    componentDidMount(): void {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChange = (pageNumber: number) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    }

    render() {
        return (
            <>
                {this.props.isFetching ? <Preloader/> : null}
                <Users users={this.props.users}
                       pageSize={this.props.pageSize}
                       totalUsersCount={15}
                       currentPage={this.props.currentPage}
                       userPhoto={userPhoto}
                       follow={this.props.follow}
                       unFollow={this.props.unFollow}
                       setCurrentPage={this.props.setCurrentPage}
                       onPageChange={this.onPageChange}
                       followingInProgress={this.props.followingInProgress}
                       toggleFollowingInProgress={this.props.toggleFollowingProgress}
                       isAuth/>

            </>
        )
    }
}


export const UsersContainer = compose(connect(mapStateToProps, {
    follow: followThunk,
    unFollow: unfollowThunk,
    setCurrentPage: setCurentPageAC,
    toggleFollowingProgress: toggleFollowingProgressAC,
    getUsers: getUsers
}))(UsersAPIContainer)