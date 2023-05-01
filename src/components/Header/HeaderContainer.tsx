import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { authMePropsType, autnMeAC } from "../../redux/auth-reducer";
import { AppStateType } from "../../redux/redux-state";
import Header from "./Header";


type HeaderAUTHContainerPropsType = {
    isAuth: boolean
    id: number
    email: string
    login: string
    autnMeAC: (id: number, email: string, login: string) => void
}

class HeaderContainer extends React.Component<HeaderAUTHContainerPropsType>{

    componentDidMount(): void {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true }).then(responce => {

            if (responce.data.resultCode === 0) {
                this.props.autnMeAC(responce.data.id, responce.data.data.email, responce.data.data.login)
            }
            
        })
    }

    render() {
        return (
            <Header id={this.props.id} email={this.props.email} login={this.props.login} isAuth={this.props.isAuth} />
        )
    }

}


const mapStateToProps = (state: AppStateType): authMePropsType => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login,
        email: state.auth.email,
        id: state.auth.id
    }
}

export default connect(mapStateToProps,
    { autnMeAC: autnMeAC })(HeaderContainer)