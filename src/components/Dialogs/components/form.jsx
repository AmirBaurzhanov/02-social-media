import { Field, reduxForm } from "redux-form"
import requiredField from "../../../utils/validators/valid";
import { TextArea } from "../../commons/FormsControl";

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <Field
                name={"textarea"} validate={requiredField} component={TextArea}
                cols="90" rows="5" placeholder="Enter your message" /> <br />
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: 'dialogAddMessage'})(AddMessageForm)

export default AddMessageFormRedux;