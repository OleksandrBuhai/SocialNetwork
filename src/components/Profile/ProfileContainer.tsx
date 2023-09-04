import {connect} from "react-redux";
import React from 'react';
import {
    getProfileThunk,
    getStatusThunk,
    PostType,
    profileAPItype,
    setProfileAC,
    updateStatusThunk
} from '../../redux/profile-reducer';
import {AppStateType} from '../../redux/redux-state';
import Profile from './Profile';
import {RouteComponentProps, withRouter} from "react-router-dom";
import withAuthRedirect from "../../hoc/withAuthRedirect";
import {compose} from "redux";


type mapStateToProps = {
    profile: number
}

type profileContainerPropsType = {
    posts: Array<PostType>
    newPostText: string
    setProfilePage: (profile: profileAPItype) => void
    getProfilePage: (userId: string) => void
    profile: profileAPItype | null
    isAuth: boolean
    status:string
    updateStatus : (status:string)=>void
}

type PathParamsType = {
    userId: string,
}

type PropsType = RouteComponentProps<PathParamsType> & profileContainerPropsType

export class ProfieAPIContainer extends React.Component<PropsType> {

    componentDidMount(): void {
        let userId = this.props.match.params.userId
        if (!userId) userId = '25296'
        this.props.getProfilePage(userId)
    }

    render() {

        return (
            <div>
                <Profile {...this.props}  status={this.props.status} updateStatus={this.props.updateStatus}/>
            </div>
        )
    }
}

type mapStateToPropsType = {
    posts: Array<PostType>
    newPostText: string
    profile: profileAPItype | null
    isAuth: boolean
    status:string
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => ({
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth,
    status:state.profilePage.status
})


export const ProfileContainer =  compose<React.ComponentType>(
    connect(mapStateToProps, {
        setProfilePage: setProfileAC,
        getProfilePage: getProfileThunk,
        getStatus: getStatusThunk,
        updateStatus: updateStatusThunk
    }),
    withRouter,
    withAuthRedirect
)(ProfieAPIContainer)
