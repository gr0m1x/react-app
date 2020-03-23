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

const App = (props) => {
    return (
            <div className="appWrapper">
                <Header/>
                <NavbarContainer store={props.store}/>
                <div className="appWrapperContent">
                    <Route path="/profile" render={ () =>
                        <ProfileContainer/> }
                    />
                    <Route /*exact*/ path="/dialogs" render={ () =>
                        <DialogsContainer
                            // store={props.store}
                        />
                    }/>
                    <Route path="/users" render={ () => <UsersContainer/>}/>
                    <Route path="/news" render={ () => <News/>}/>
                    <Route path="/music" render={ () => <Music/>}/>
                    <Route path="/settings" render={ () => <Settings/>}/>
                </div>
            </div>
    );
}

export default App;