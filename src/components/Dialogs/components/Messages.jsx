import d from '../static/messages.module.css'
import Dialog from './Dialog'
import React from "react";
import { Redirect } from 'react-router-dom';

const Message = (props) => {
    return (
        <div className={d.dialog}>{props.message}</div>
    )
}

const Messages = (props) => {
    if (props.isAuth === false) {
        return <Redirect to="login/" />
    }
    let messageElements = props.dialogsData.messagesData
        .map((message) =>
            <Message message={message.message} key={message.id}/>
        );

    let dialogElements = props.dialogsData.dialogsData
        .map((dialog) =>
            <Dialog name={dialog.name} key={dialog.id} id={dialog.id}/>
        );

    let onSendMessageClick = () => {
        props.onSendMessageClick()
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.onNewMessageChange(body)
    }
    return (
        <div className="wrapper">
            <div className={d.dialogs}>
                <div className={d.items}>
                    {dialogElements}
                </div>
                <div className={d.messages}>
                    {messageElements}
                </div>
            </div>
            <div className={d.chat}>
                <textarea value={props.dialogsData.newMessageText} name="textarea" onChange={onNewMessageChange} cols="90" rows="5" placeholder="Введите сообщение"/> <br/>
                <button onClick={onSendMessageClick} className="btn btn-outline-primary text-center">Отправить</button>
            </div>
        </div>
    )
}

export default Messages;