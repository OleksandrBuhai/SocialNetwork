import React from 'react'
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
    dispatch: (e: ActionsType) => void
}

export const Dialogs:React.FC<StatePropsType> = (props) => {


    let dialogsElements = props.state.dialogsData.map((el,index) => <DialogItem key={index} name={el.name} id={el.id} avatar={el.avatar}/>)
    let messagesElement = props.state.messagesData.map((el,index) => <Message key={index} message={el.message}/>)

    let newMessageElementValue= React.createRef<HTMLTextAreaElement>();

    const addMessage = () => {
        console.log('asdasd')
        props.dispatch(addMessageActionCreator())
        if (newMessageElementValue.current){
            newMessageElementValue.current.value= ""
        }

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








