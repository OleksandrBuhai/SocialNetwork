import { connect } from "react-redux";
import { Dispatch } from 'redux';
import { AppStateType } from "../../redux/redux-state";
import { followAC, unfollowAC, userType } from "../../redux/users-reducer";
import { Users } from "./Users";

type mapStateToProps = {
    users:Array<userType>
}

type mapDispatchToProps = {
    follow: (userId:string)=>void,
    unFollow: (userId:string)=>void,
}

const mapStateToProps = (state:AppStateType):mapStateToProps=>{
        return {
            users:state.userPage.users
        }   
}

const mapDispatchToProps = (dispatch:Dispatch) => {
        return {
            follow:(userId:string)=> {
                dispatch(followAC(userId))
            },
            unFollow:(userId:string)=>{
                dispatch(unfollowAC(userId))
            }
        }
}

export const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)