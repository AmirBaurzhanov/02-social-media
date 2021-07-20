import {sendMessageCreator} from "../../../redux/dialogsReducer";
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
        onSendMessageClick(newTextBody) {
            dispatch(sendMessageCreator(newTextBody));
        },
    }
}

let Compose = compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Messages)

export default Compose