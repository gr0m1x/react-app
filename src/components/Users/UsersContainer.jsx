import React from 'react';
import {follow, unfollow, requestUsers} from '../../redux/users-reducer';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getIsLoading,
    getPageSize,
    getTotalUserCount,
    getUsers,
    setFollowingInProgress
} from "../../redux/users-selectors";
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {

    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
    };

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
                       // isLoading={this.props.isLoading}
                       followingInProgress={this.props.followingInProgress}
                />
            </>
        );
    };
}

// let mapStateToProps = (state) => {
//     return{
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUserCount: state.usersPage.totalUserCount,
//         currentPage: state.usersPage.currentPage,
//         isLoading: state.usersPage.isLoading,
//         followingInProgress: state.usersPage.followingInProgress
//     }
// };
let mapStateToProps = (state) => {
    return{
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUserCount: getTotalUserCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followingInProgress: setFollowingInProgress(state) // делает кнопку "follow" "unfollow" disabled
    }
};

export default compose( // compose выполняет по очереди функции, с низу в верх
    connect(mapStateToProps, {follow, unfollow, requestUsers}),
    // withAuthRedirect // hoc withAuthRedirect. если не залогинен , ридеректид на страницу Логин
)(UsersContainer);