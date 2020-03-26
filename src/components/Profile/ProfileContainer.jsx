import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId; // взятие Id User при нажатии на Icon в Users Page
        this.props.getUserProfile(userId); // вывод информации о User в Profile
    }

    render() {
        if( !this.props.isAuth ) return <Redirect to="/login"/>

        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth : state.auth.isAuth
});

let withUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps , {getUserProfile}) (withUrlDataContainerComponent);