import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { AppStateType } from "../../redux/redux-state";
import { followAC, setUsersAC, unfollowAC, userType } from "../../redux/users-reducer";
import { Users } from "./Users";

type mapStateToPropsType = {
    users: Array<userType>
}

type mapDispatchToPropsType = {
    follow: (userId: string) => void,
    unFollow: (userId: string) => void,
    setUsers: (users: Array<userType>) => void
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        users: state.userPage.users
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        follow: (userId: string) => {
            dispatch(followAC(userId))
        },
        unFollow: (userId: string) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users: Array<userType>) => {
            dispatch(setUsersAC(users))
        }
    }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)