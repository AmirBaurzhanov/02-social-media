import { connect } from "react-redux";
import { follow, setUsers, unFollow, changeCurrentPage, toggleFetching, toggleFollowingProgress } from "../../../redux/usersReducer";
import React from "react";
import UsersList from "./usersList";
import Preloader from "../../commons/preloader";
import { usersPageAPI } from "../../../api/api";

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true)
        usersPageAPI.getUsers(this.props.currentPage, this.props.pageSize).then(response => {
            this.props.toggleFetching(false)
            this.props.setUsers(response.items);
        });
    }

    onPageChanged = (pages) => {
        this.props.changeCurrentPage(pages)
        this.props.toggleFetching(true)
        usersPageAPI.pageChanged(pages, this.props.pageSize).then(response => {
            this.props.toggleFetching(false)
            this.props.setUsers(response.items);
        });
    }

    render() {
        return <>
            {this.props.isFetching ?
                <Preloader /> : null}
            <UsersList users={this.props.users}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
                totalUsersCount={this.props.totalUsersCount}
                currentPage={this.props.currentPage}
                pageSize={this.props.pageSize}
                onPageChanged={this.onPageChanged}
                toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
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
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress

    }
};

export default connect(mapStateToProps,
    {follow, unFollow, setUsers, changeCurrentPage, toggleFetching, toggleFollowingProgress})(UsersAPIComponent);