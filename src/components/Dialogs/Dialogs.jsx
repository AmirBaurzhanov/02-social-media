import Dialog from "./components/Dialog";
import Messages from "./components/Messages";

const Dialogs = (props) => {
    return (
        <div>
            <Dialog />
            <Messages dialogsData={props.data.dialogsData} messagesData={props.data.messagesData} />
        </div>
    )
}

export default Dialogs;