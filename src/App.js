import React from 'react';
import './App.css';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {BrowserRouter, Route, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Login from "./components/Login/Login";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";


class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
         if ( !this.props.initialized) {
             return ( <Preloader/> );
         }

         return (
            <div className="appWrapper">
                <HeaderContainer/>
                <NavbarContainer store={this.props.store}/>
                <div className="appWrapperContent">
                    <Route path="/profile/:userId?" render={() =>
                        <ProfileContainer/>}/>

                    <Route path="/dialogs" render={() =>
                        <DialogsContainer/>}/>

                    <Route path="/users" render={() =>
                        <UsersContainer/>}/>

                    <Route path="/news" render={() => <News/>}/>
                    <Route path="/login" render={() => <Login/>}/>
                    <Route path="/settings" render={() => <Settings/>}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized,
});

let AppContainer = compose(
    withRouter,
    connect(mapStateToProps , {initializeApp}),
    // withAuthRedirect
)(App);

const MainApp = (props) => {
    return (
        <BrowserRouter>
            <Provider store={store}>
                <AppContainer/>
            </Provider>
        </BrowserRouter>
    )
};

export default MainApp;