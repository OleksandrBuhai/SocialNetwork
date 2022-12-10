import React from 'react'
import c from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./Dialog/DialogItem";


type DialogsPropsType = {
    dialogs: Array<dialogsData>
    messages: Array<messagesData>
}

type dialogsData = {
    id: number,
    name: string
}
type messagesData = {
    id: number
    message: string
}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogs.map(el => <DialogItem name={el.name} id={el.id}/>)
    let messagesElement = props.messages.map(el => <Message message={el.message}/>)

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








