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
    return (
        <div className="container">
            <div className={d.dialogs}>
                <div className={d.items}>
                    <Dialog name="Amir" id="1"/>
                    <Dialog name="Dymich" id="2"/>
                    <Dialog name="Andrey" id="3"/>
                    <Dialog name="Victor" id="4"/>
                </div>
                <div className={d.messages}>
                    <Message message="Hi!"/>
                    <Message message="How are you?"/>
                    <Message message="What are you doing?"/>
                    <Message message="YO"/>
                </div>
            </div>
        </div>
    )
}

export default Messages;