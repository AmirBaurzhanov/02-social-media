import Dialog from "./components/Dialog";
import Messages from "./components/Messages";

const Dialogs = (props) => {
    return (
        <div>
            <Dialog />
            <Messages dialogsData={props.data} dispatch={props.dispatch}  ActionCreator={props.ActionCreator}/>
        </div>
    )
}

export default Dialogs;