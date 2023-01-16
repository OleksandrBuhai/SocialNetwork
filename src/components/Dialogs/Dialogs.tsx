import React, {ChangeEvent} from 'react'
import c from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./Dialog/DialogItem";
import {ActionsType,} from "../../redux/state";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";


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
    state: DialogsType
    addMessage:(e:string)=>void
    onMessageChange:(e:string)=>void
    newMessageText:string
}

export const Dialogs:React.FC<StatePropsType> = (props) => {


    let dialogsElements = props.state.dialogsData.map((el,index) => <DialogItem key={index} name={el.name} id={el.id} avatar={el.avatar}/>)
    let messagesElement = props.state.messagesData.map((el,index) => <Message key={index} message={el.message}/>)

    let newMessageElementValue= React.createRef<HTMLTextAreaElement>();

    const addMessage = () => {
            props.addMessage(props.newMessageText)
    }
    const onMessageChange = (e:ChangeEvent<HTMLTextAreaElement>) => {
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
            <textarea className={c.textArea} ref={newMessageElementValue} onChange={onMessageChange} value={props.newMessageText}></textarea>
            <button className={c.button} onClick={addMessage}>Send Message</button>
        </div>
    )

}








