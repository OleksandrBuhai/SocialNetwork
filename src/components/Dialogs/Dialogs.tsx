import React, {ChangeEvent} from 'react';
import {DialogItem} from "./Dialog/DialogItem";
import c from "./Dialogs.module.css";
import {Message} from "./Message/Message";


type DialogType = {
    id: number,
    name: string,
    avatar: string
}
type MessagesType = {
    id: number,
    message: string
}
type DialogsType = {
    dialogsData: Array<DialogType>,
    messagesData: Array<MessagesType>
    newMessageBody: string
}
type StatePropsType = {
    dialogsPage: DialogsType
    isAuth:boolean
    addMessage: () => void
    onMessageChange: (e: string) => void
}

export const Dialogs: React.FC<StatePropsType> = (props) => {

    let dialogsElements = props.dialogsPage.dialogsData.map((el, index) => <DialogItem key={index} name={el.name} id={el.id}
                                                                                 avatar={el.avatar}/>)
    let messagesElement = props.dialogsPage.messagesData.map((el, index) => <Message key={index} message={el.message}/>)


    const addMessage = () => {
        props.addMessage()
        console.log(props.dialogsPage.newMessageBody);
  
    }
    const onMessageChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.onMessageChange(e.currentTarget.value)
    }


    return (

        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElement}
            </div>
            <textarea className={c.textArea} onChange={onMessageChange}
                      value={props.dialogsPage.newMessageBody}></textarea>
            <button className={c.button} onClick={addMessage}>Send Message</button>
        </div>
    )

}









