import {actionCreator} from "../../../redux/dialogsReducer";
import Messages from "./Messages";
import StoreContext from "../../../storeContext";


const MessagesContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();
                    let onSendMessageClick = () => {
                        store.dispatch((actionCreator('addMessage')));
                    }
                    let onNewMessageChange = (body) => {
                        store.dispatch((actionCreator('updateMessage', body)));
                    }
                    return (
                        <Messages onSendMessageClick={onSendMessageClick} onNewMessageChange={onNewMessageChange}
                                  dialogsData={state.dialogsPage}/>
                    )
                }
            }
        </StoreContext.Consumer>
    )
}

export default MessagesContainer;
