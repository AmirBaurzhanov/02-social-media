import Dialog from "./components/Dialog";
import Messages from "./components/Messages";


const Dialogs = (props) => {
    return (
        <div>
            <Dialog />
            <Messages dialogsData={props.dialogsData} messagesData={props.messagesData} />
        </div>
    )
}