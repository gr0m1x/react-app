import React from 'react';
import {follow, setUsers, unfollow,setCurrentPage,setTotalUsersCount,toggleLoader} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";

class UsersContainerAPI extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.toggleLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
            // withCredentials: true
        }).then(response => {
            this.props.toggleLoader(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalUsersCount(response.data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber)
        this.props.toggleLoader(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`, {
            // withCredentials: true
        }).then(response => {
            this.props.toggleLoader(false)
            this.props.setUsers(response.data.items)
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
    }
};

const UsersContainer = connect(mapStateToProps,
    {follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleLoader}
)(UsersContainerAPI);

export default UsersContainer;