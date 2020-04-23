import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, getUserStatus, savePhoto, saveProfile, updateUserStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
// import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Login from "../Login/Login";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.match.params.userId; // взятие Id User при нажатии на Icon в Users Page
        if (!userId) {
            userId = this.props.authorizedUserId
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId); // вывод информации о User в Profile
        this.props.getUserStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) { // если предыдущий userId не равен новому, перерисовываем ProfileInfo
            this.refreshProfile()
        }

    }

    render() {
        return (
            <Profile
                {...this.props}
                isOwner={!this.props.match.params.userId} // если id undefined(номер ID приходе только пр переходу с user page) = отрицание = true. значит страница пользователя владельца
                profile={this.props.profile}
                status={this.props.status}
                updateUserStatus={this.props.updateUserStatus}
                savePhoto={this.props.savePhoto}
            />
        );
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
});

export default compose(
    connect(mapStateToProps , {getUserProfile, getUserStatus, updateUserStatus, savePhoto, saveProfile}),
    withRouter,
    // withAuthRedirect
)(ProfileContainer);