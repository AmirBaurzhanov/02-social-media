import { connect } from "react-redux";
import { logoutThunkCreator } from "../../redux/authReducer"
import LogOutReduxForm from "./Components/LogoutForm";

const Logout = (props) => {
    const onSubmit = () => {
        props.logoutThunkCreator()
    }
    return (
        <div className="container">
            <LogOutReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

const LogoutCont = connect(null, {logoutThunkCreator})(Logout)

export default LogoutCont;