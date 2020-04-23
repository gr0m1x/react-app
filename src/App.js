import React from 'react';
import './App.css';
import NavbarContainer from "./components/Navbar/NavbarContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {BrowserRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import News from "./components/News/News";
import Login from "./components/Login/Login";
import Settings from "./components/Settings/Settings";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import store from "./redux/redux-store";
import {withSuspense} from "./hoc/withSuspanse";

// import ProfileContainer from "./components/Profile/ProfileContainer";
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'));

class App extends React.Component {

    catchAllUnhandledErrors = (promiseRejectionEvent) => {
        alert("ERROR") //если есть ошибка можно задиспатчить ее в стор , и вывести на экран
    }; // перехватываем все неперехваченые rejection промисы

    componentDidMount() {
        this.props.initializeApp()
        window.addEventListener("unhandledrejection", this.catchAllUnhandledErrors); // когда произойдет не перехваченый rejection. вызываем catchAllUnhandledErrors
    }

    componentWillUnmount() {
        window.removeEventListener("unhandledrejection", this.catchAllUnhandledErrors);
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
                    <Switch>
                        <Route exact path="/" render={() => <Redirect to="/profile"/>}/>

                        <Route path="/profile/:userId?" render={ withSuspense(ProfileContainer) }/>

                        <Route path="/dialogs" render={() =>
                            <DialogsContainer/>}/>

                        <Route path="/users" render={() =>
                            <UsersContainer/>}/>

                        <Route path="/news" render={() => <News/>}/>
                        <Route exact path="/login" render={() => <Login/>}/>  {/*exact отрисовка если url совпадает на 100% */}
                        <Route path="/settings" render={() => <Settings/>}/>

                        <Route path="*" render={() => <div>404 page not found</div>}/>
                    </Switch>
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