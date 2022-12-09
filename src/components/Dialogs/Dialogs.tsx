import React from 'react'
import c from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import {Message} from "./Message/Message";
import {DialogItem} from "./Dialog/DialogItem";



type DialogsPropsType = {
    dialogs : Array<dialogsData>
    messages: Array<messagesData>
}

type dialogsData = {
    id:number,
    name:string
}
type messagesData = {
    id:number
    name:string
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








