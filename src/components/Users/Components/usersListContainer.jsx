import { connect } from "react-redux";
import { follow, setUsers, unFollow, changeCurrentPage, toggleFetching } from "../../../redux/usersReducer";
import React from "react";
import * as axios from 'axios';
import UsersList from "./usersList";
import loader from '../static/loader.svg'

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.data.items);
            });
    }

    onPageChanged = (pages) => {
        this.props.changeCurrentPage(pages)
        this.props.toggleFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pages}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(false)
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <>
            {this.props.isFetching ?
                <div>
                    <img src={loader} />
                </div> : null}
            <UsersList users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
            />
        </>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
};

export default connect
    (
        mapStateToProps,
        {
            follow,
            unFollow,
            setUsers,
            changeCurrentPage,
            toggleFetching,
        }
    )
    (UsersAPIComponent);