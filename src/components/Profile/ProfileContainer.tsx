import * as axios from "axios";
import { connect } from "react-redux";
import React from 'react';
import { setProfileAC } from '../../redux/profile-reducer';
import { AppStateType } from '../../redux/redux-state';
import Profile from './Profile';


type mapStateToProps = {
    profile: number
}

type profileContainerPropsType = {
    profile:number,
    setProfilePage: (profile:number)=>void
}

const mapStateToProps = (state:AppStateType):mapStateToProps => {
    return {
        profile:state.profilePage.profile
    }
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


export const ProfieContainer = connect(mapStateToProps,{
    setProfilePage:setProfileAC
})(ProfieAPIContainer)