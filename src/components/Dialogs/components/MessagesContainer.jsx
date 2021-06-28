import {actionCreator} from "../../../redux/dialogsReducer";
import Messages from "./Messages";


const MessagesContainer = (props) => {
    let state = props.store.getState();
    let onSendMessageClick = () => {
        props.store.dispatch((actionCreator('addMessage')));
    }
    let onNewMessageChange = (body) => {
        props.store.dispatch((actionCreator('updateMessage', body)));
    }
    return (
        <Messages onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange}
                  dialogsData={state.dialogsPage}/>
    )
}

export default MessagesContainer;