import d from './static/messages.module.css'
import {NavLink} from "react-router-dom";

const Dialog = (props) => {
    let path = "/messages/" + props.id;

    return (
        <div className={d.dialog}>
            <NavLink to={path} className={d.navLink}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={d.dialog}>{props.message}</div>
    )
}

const Messages = (props) => {

    let dialogsData = [
        {id: '1', name: 'Amir'},
        {id: '2', name: 'Dymich'},
        {id: '3', name: 'Andrey'},
        {id: '4', name: 'Victor'},
    ]

    let messagesData = [
        {id: '1', message: 'Hi!'},
        {id: '2', message: 'How are you?'},
        {id: '3', message: 'What are you doing?'},
        {id: '4', message: 'YO'},
    ]

    let messageElements = messagesData
        .map((message) => <Message message={message.message}/>)

    let dialogElements = dialogsData
        .map( (dialog) => <Dialog name={dialog.name} id={dialog.id}/>)

    return (
        <div className="container">
            <div className={d.dialogs}>
                <div className={d.items}>
                    {dialogElements}
                </div>
                <div className={d.messages}>
                    {messageElements}
                </div>
            </div>
        </div>
    )
}

export default Messages;