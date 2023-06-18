import * as axios from "axios";
import {connect} from "react-redux";
import React from 'react';
import {getProfileThunk, PostType, profileAPItype, setProfileAC} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-state';
import Profile from './Profile';
import {RouteComponentProps, withRouter} from "react-router-dom";


type mapStateToProps = {
    profile: number
}

type profileContainerPropsType = {
    posts: Array<PostType>
    newPostText: string
    setProfilePage: (profile: profileAPItype) => void
    getProfilePage: (userId: string) => void
    profile: profileAPItype | null
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
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile
})


let containerWithRoute = withRouter(ProfieAPIContainer)

export const ProfieContainer = connect(mapStateToProps, {
    setProfilePage: setProfileAC,
    getProfilePage: getProfileThunk,
})(containerWithRoute)