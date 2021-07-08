import u from '../static/users.module.css'

const UsersList = (props) =>{
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: '1',
                fullName: 'Amir',
                status: 'Programist',
                location: { city: 'Nur-Sultan', country: 'Kazakhstan' },
                isFriend: true,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQr-j7o2xWexDTosmQob_PpHPn-F9Bjw5gVQ&usqp=CAU'
            },
            {
                id: '2',
                fullName: 'Sasha',
                status: 'LOX',
                location: { city: 'Moscow', country: 'Russia' },
                isFriend: true,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQr-j7o2xWexDTosmQob_PpHPn-F9Bjw5gVQ&usqp=CAU'
            },
            {
                id: '3',
                fullName: 'Sergei',
                status: 'LOX',
                location: { city: 'Kiev', country: 'Ukraine' },
                isFriend: false,
                photoURL: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQr-j7o2xWexDTosmQob_PpHPn-F9Bjw5gVQ&usqp=CAU'
            },
            {
            }
        ])
    }

    return (
        props.users.map(users => <div key={users.id}>
            <div className="container">
                <ul className="usersList">
                    <li className={u.usersList}>
                        <img
                            src={users.photoURL}
                            alt="icon" />
                        <h4 className={u.userName}>{users.fullName}</h4>
                        <p className={u.userText}>{users.status}</p>
                        <div>
                            {users.isFriend
                                ? <button className="btn btn-primary mt-5" onClick={() => {
                                    props.unFollow(users.id)
                                }}>Unfollow</button>
                                : <button className="btn btn-primary mt-5" onClick={() => {
                                    props.follow(users.id)
                                }}>Follow</button>}
                        </div>
                        <div className={u.location}>
                            <ul>
                                <li>
                                    {users.location.city}
                                </li>
                                <li>
                                    {users.location.country}
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </div>)
    )
}

export default UsersList;