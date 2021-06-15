import d from "../static/messages.module.css";
import {NavLink} from "react-router-dom";


const Dialog = (props) => {
    let path = "/messages/" + props.id;

    return (
        <div className={d.dialog}>
            <NavLink to={path} className={d.navLink}>{props.name}</NavLink>
        </div>
    )
}

export default Dialog;