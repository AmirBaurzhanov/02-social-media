import d from '../static/messages.module.css'
import Dialog from './Dialog'
import React from "react";
import AddMessageFormRedux from './form';

const Message = (props) => {
    return (
        <div className={d.dialog}>{props.message}</div>
    )
}

const Messages = (props) => {
    let messageElements = props.dialogsData.messagesData
        .map((message) =>
            <Message message={message.message} key={message.id}/>
        );

    let dialogElements = props.dialogsData.dialogsData
        .map((dialog) =>
            <Dialog name={dialog.name} key={dialog.id} id={dialog.id}/>
        );

    let onNewMessageChange = (values) => {
        props.onSendMessageClick(values.textarea)
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
                <AddMessageFormRedux onSubmit={onNewMessageChange}/>
            </div>
        </div>
    )
}

export default Messages;