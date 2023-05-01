import React from "react";
import Header from "./Header";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/redux-state";
import { type } from "os";
import { autnMeAC } from "../../redux/auth-reducer";


type HeaderAUTHContainerPropsType = {
    isAuth:boolean
    login:string
}

class HeaderContainer extends React.Component<HeaderAUTHContainerPropsType>{

    render (){
        return (
            <Header {...this.props}/>
        )
    }

}
type mapStateToPropsType ={

}

const mapStateToProps = (state:AppStateType):mapStateToPropsType => {
    return {
        isAuth:state.auth.isAuth,
        login:state.auth.login
    }
}

export default connect(mapStateToProps,
    {autnMe:autnMeAC})(HeaderContainer)