import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId; // взятие Id User при нажатии на Icon в Users Page
        if (!userId) {
            userId = 6657
        }
        this.props.getUserProfile(userId); // вывод информации о User в Profile
        this.props.getUserStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateUserStatus={this.props.updateUserStatus}/>
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
});

//
//
// compose(
//     connect(mapStateToProps , {getUserProfile}),
//     withRouter(AuthRedirectComponent),
//     withAuthRedirect
// )
// (ProfileContainer)
//
//
//
// let AuthRedirectComponent = withAuthRedirect(ProfileContainer); // hoc проверка авторизации
//
//
//
// let withUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps , {getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);