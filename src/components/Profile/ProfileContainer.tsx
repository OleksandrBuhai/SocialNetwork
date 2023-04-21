import * as axios from "axios";
import { connect } from "react-redux";
import React from 'react';
import { PostType, profileAPItype, setProfileAC } from '../../redux/profile-reducer';
import { AppStateType } from '../../redux/redux-state';
import Profile from './Profile';


type mapStateToProps = {
    profile: number
}

type profileContainerPropsType = {
    posts: Array<PostType>
    newPostText: string
    setProfilePage: (profile: profileAPItype) => void
    profile: profileAPItype | null
}

class ProfieAPIContainer extends React.Component<profileContainerPropsType> {

    componentDidMount(): void {
        axios.default.get(`https://social-network.samuraijs.com/api/1.0/profile/2`).then(response => {
            this.props.setProfilePage(response.data)
        }
        )
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

export const ProfieContainer = connect(mapStateToProps, {
    setProfilePage: setProfileAC
})(ProfieAPIContainer)