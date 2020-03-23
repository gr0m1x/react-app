import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Route} from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

const App = (props) => {
    return (
            <div className="appWrapper">
                <HeaderContainer/>
                <NavbarContainer store={props.store}/>
                <div className="appWrapperContent">
                    <Route path="/profile/:userId?" render={ () =>
                        <ProfileContainer/> }/>

                    <Route path="/dialogs" render={ () =>
                        <DialogsContainer/>}/>

                    <Route path="/users" render={ () =>
                        <UsersContainer/>}/>

                    <Route path="/news" render={ () => <News/>}/>
                    <Route path="/music" render={ () => <Music/>}/>
                    <Route path="/settings" render={ () => <Settings/>}/>
                </div>
            </div>
    );
}

export default App;