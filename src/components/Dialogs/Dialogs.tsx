import React from 'react'
import c from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";

type DialogItemPropsType = {
    name:string
    id: number
}

export const DialogItem = (props: DialogItemPropsType) => {

    let path = "/dialogs" + props.id
    return (
        <div className={c.dialogs + ' ' + c.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

type MessagePropsType = {
    message: string
}

export const Message = (props: MessagePropsType) => {
    return (
        <div className={c.dialogs}>{props.message}</div>
    )
}
type DialogsPropsType = {

}

export const Dialogs = (props:DialogsPropsType) => {

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrew'},
        {id: 3, name: 'Sveta'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Valera'}
    ]

    let messagesData = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo'},
        {id: 4, message: 'Yo'},
        {id: 5, message: 'Yo'}
    ]

    let dialogsElements = dialogsData.map(el=> <DialogItem name={el.name} id={el.id} />)
    let messagesElement = messagesData.map(el=> <Message message={el.message}/>)

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElement}
            </div>
        </div>
    )

}








