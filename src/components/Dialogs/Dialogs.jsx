import Dialog from "./components/Dialog";
import MessagesContainer from "./components/MessagesContainer";

const Dialogs = (props) => {
    return (
        <div>
            <Dialog/>
            <MessagesContainer store={props.store}/>
        </div>
    )
}

export default Dialogs;