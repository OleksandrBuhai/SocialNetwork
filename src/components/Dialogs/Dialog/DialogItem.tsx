import React from "react";
import c from './DialogsItem.module.css'
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name: string
    id: number
    avatar:string
}

export const DialogItem = (props: DialogItemPropsType) => {

    let path = "/dialogs" + props.id
    return (
        <div className={c.dialogs + ' ' + c.active}>
            <img src={props.avatar}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}
