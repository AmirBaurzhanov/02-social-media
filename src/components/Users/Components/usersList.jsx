import u from '../static/users.module.css'
import * as axios from 'axios'
import React from 'react';

let defaultImageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvts5aHBstDkR8PigS4RmZkbZy78zpZoSuOw&usqp=CAU";

class UsersList extends React.Component {
    componentDidMount() {
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            });
    }
    render() {
        return <div>
            <h3 className="text-center mb-4">Users</h3>{
                this.props.users.map(users => <div key={users.id}>
                    <div className="container">
                        <ul className="usersList">
                            <li className={u.usersList}>
                                <img
                                    src={users.photos.large != null ? u.photos.small : defaultImageURL}
                                    alt="icon" />
                                <h4 className={u.userName}>{users.name}</h4>
                                <p className={u.userText}>{users.status}</p>
                                <div>
                                    {users.followed
                                        ? <button className="btn btn-primary mt-4" onClick={() => {
                                            this.props.unFollow(users.id)
                                        }}>Unfollow</button>
                                        : <button className="btn btn-primary mt-4" onClick={() => {
                                            this.props.follow(users.id)
                                        }}>Follow</button>}
                                </div>
                                {/* <div className={u.location}>
                            <ul>
                                <li>
                                    {users.location.city}
                                </li>
                                <li>
                                    {users.location.country}
                                </li>
                            </ul>
                        </div> */}
                            </li>
                        </ul>
                    </div>
                </div>)
            }
        </div>
    }
}

export default UsersList;