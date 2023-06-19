import * as axios from "axios";
import {connect} from "react-redux";
import React from 'react';
import {getProfileThunk, PostType, profileAPItype, setProfileAC} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-state';
import Profile from './Profile';
import {Redirect, RouteComponentProps, withRouter} from "react-router-dom";


type mapStateToProps = {
    profile: number
}

type profileContainerPropsType = {
    posts: Array<PostType>
    newPostText: string
    setProfilePage: (profile: profileAPItype) => void
    getProfilePage: (userId: string) => void
    profile: profileAPItype | null
    isAuth:boolean
}

type PathParamsType = {
    userId: string,
}

type PropsType = RouteComponentProps<PathParamsType> & profileContainerPropsType

class ProfieAPIContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) userId = '25296'
        this.props.getProfilePage(userId)
    }

    render() {
       if (!this.props.isAuth) return  <Redirect to='/login'/>
        return (
            <div>
                <Profile {...this.props} />
            </div>
        )
    }
}

type mapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
    profile: profileAPItype | null
    isAuth:boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
    isAuth:state.auth.isAuth
})


let containerWithRoute = withRouter(ProfieAPIContainer)

export const ProfileContainer = connect(mapStateToProps, {
    setProfilePage: setProfileAC,
    getProfilePage: getProfileThunk,
})(containerWithRoute)