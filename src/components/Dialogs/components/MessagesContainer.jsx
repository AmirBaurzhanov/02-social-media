import {actionCreator} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";
import Messages from "./Messages";


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onSendMessageClick() {
            dispatch((actionCreator('addMessage')));
        },
        onNewMessageChange(body) {
            dispatch((actionCreator('updateMessage', body)));
        }
    }
}

export const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Messages)