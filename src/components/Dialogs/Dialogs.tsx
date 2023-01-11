import React from 'react'
import c from "./Dialogs.module.css"
import {Message} from "./Message/Message";
import {DialogItem} from "./Dialog/DialogItem";
import {ActionsType, addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/state";


type DialogsPropsType = {
    dialogs: Array<dialogsData>
    messages: Array<messagesData>
    dispatch:(e:ActionsType)=>void
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

    let newMessageElementValue= React.createRef<HTMLTextAreaElement>();

    const addMessage = () => {
        console.log('asdasd')
        props.dispatch(addMessageActionCreator())
    }
    const onMessageChange = () => {
        if (newMessageElementValue.current){
            let text = newMessageElementValue.current.value
            props.dispatch(updateNewMessageTextActionCreator(text))
        }
    }

    return (
        <div className={c.dialogs}>
            <div className={c.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={c.messages}>
                {messagesElement}
            </div>
            <textarea className={c.textArea} ref={newMessageElementValue} onChange={onMessageChange}></textarea>
            <button className={c.button} onClick={addMessage}>Send Message</button>
        </div>
    )

}








