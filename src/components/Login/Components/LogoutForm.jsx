import {  reduxForm } from "redux-form"


const LogOutForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <button type="submit" className="btn btn-primary">Log Out</button>
            </form>
        </div>
    )
}

const LogOutReduxForm = reduxForm({ form: 'logout' })(LogOutForm)


export default LogOutReduxForm;