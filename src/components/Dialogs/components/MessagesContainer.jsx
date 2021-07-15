import {actionCreator} from "../../../redux/dialogsReducer";
import {connect} from "react-redux";
import Messages from "./Messages";
import { withAuthRedirect } from "../../../hoc/withAuthRedirect";
import { compose } from "redux";


let mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage,
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

let Compose = compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Messages)

export default Compose