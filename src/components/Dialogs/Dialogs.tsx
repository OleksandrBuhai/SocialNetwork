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
    avatar:string
}
type messagesData = {
    id: number
    message: string
}

export const Dialogs = (props: DialogsPropsType) => {


    let dialogsElements = props.dialogs.map((el,index) => <DialogItem key={index} name={el.name} id={el.id} avatar={el.avatar}/>)
    let messagesElement = props.messages.map((el,index) => <Message key={index} message={el.message}/>)

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElement}
            </div>
            <textarea className={c.textArea}></textarea>
            <button className={c.button}>Send Message</button>
        </div>
    )

}








