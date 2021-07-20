import { Field, reduxForm } from "redux-form"

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name={"textarea"} component={"textarea"}
                cols="90" rows="5" placeholder="Enter your message" /> <br />
            <button className="btn btn-outline-primary text-center">Отправить</button>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessage'})(AddMessageForm)

export default AddMessageFormRedux;