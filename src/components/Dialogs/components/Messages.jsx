import d from '../static/messages.module.css'
import Dialog from './Dialog'

const Message = (props) => {
    return (
        <div className={d.dialog}>{props.message}</div>
    )
}

const Messages = (props) => {

    let messageElements = props.messagesData
        .map((message) =>
            <Message message={message.message}/>
        );

    let dialogElements = props.dialogsData
        .map((dialog) =>
            <Dialog name={dialog.name} id={dialog.id}/>
        );
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
                <textarea name="textarea" cols="90" rows="5" placeholder="Введите сообщение" /> <br/>
                <button className="btn btn-primary text-center">Отправить</button>
            </div>
        </div>
    )
}

export default Messages;