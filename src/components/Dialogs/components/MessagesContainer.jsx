import {actionCreator} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";
import Messages from "./Messages";


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage
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

export const dialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);