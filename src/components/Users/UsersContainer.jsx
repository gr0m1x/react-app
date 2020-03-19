import React from "react";
import {followAC, setUsersAC, unfollowAC,setCurrentPageAC,setTotalUserCountAC,} from "../../redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return{
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUserCount: state.usersPage.totalUserCount,
        currentPage: state.usersPage.currentPage,
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId));
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUserCountAC(totalCount))
        }
    }
};

const UsersContainer = connect(mapStateToProps,mapDispatchToProps)(Users);

export default UsersContainer;