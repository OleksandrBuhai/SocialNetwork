import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-state";


type mapStatePropsType = {
    isAuth:boolean
}

let mapStateToPropsForRedirect=(state:AppStateType):mapStatePropsType => {
    return {isAuth: state.auth.isAuth}
}

export function WithAuthRedirect <T>(Component:ComponentType<T>)  {

    const RedirectComponent = (props:mapStatePropsType)=>{

        let {isAuth,...restProps} = props

        if (!isAuth) return <Redirect to={'/login'}/>
        return <Component {...restProps as T} />

    }

    let connectRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent)

    return connectRedirectComponent
};

export default WithAuthRedirect;