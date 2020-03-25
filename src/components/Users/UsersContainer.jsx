import React from 'react';
import {
    follow,
    setUsers,
    unfollow,
    setCurrentPage,
    setTotalUsersCount,
    toggleLoader,
    toggleFollowingInProgress
} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {usersAPI} from "../../api/api";

class UsersContainerAPI extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.toggleLoader(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleLoader(false);
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleLoader(true);

        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleLoader(false);
            this.props.setUsers(data.items)
        });
    }

    render() {
        return  (
            <>
                { this.props.isLoading ? <Preloader/> : null }
                <Users totalUserCount={this.props.totalUserCount}
                       pageSize={this.props.pageSize}
                       currentPage={this.props.currentPage}
                       onPageChanged={this.onPageChanged}
                       users={this.props.users}
                       follow={this.props.follow}
                       unfollow={this.props.unfollow}
                       isLoading={this.props.isLoading}
                       toggleFollowingInProgress={this.props.toggleFollowingInProgress}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    };
}

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
};

const UsersContainer = connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleLoader, toggleFollowingInProgress}
)(UsersContainerAPI);

export default UsersContainer;