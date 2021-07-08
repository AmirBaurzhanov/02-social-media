import u from '../static/users.module.css'

const UsersList = (props) => {
    return (
        <div className="container">
            <ul className="usersList">
                <li className={u.usersList}>
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQr-j7o2xWexDTosmQob_PpHPn-F9Bjw5gVQ&usqp=CAU"
                        alt="icon"/>
                    <h4 className={u.userName}>{props.name}</h4>
                    <p className={u.userText}>{props.text}</p>
                    <button className="btn btn-success mt-5">
                        Follow
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default UsersList;