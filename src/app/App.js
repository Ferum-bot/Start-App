import './App.css';
import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Profile from "../components/Profile/Profile";
import Messages from "../components/Messages/Messages";
import Settings from "../components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "../components/Music /Music";
import News from "../components/News/News";

function App(props) {
  return (
      <BrowserRouter>
        <div className="App">
            <Header />
            <NavBar />
            <div className="Content">
                <Route path='/messages' render={ () => <Messages dialogsData={props.appState.dialogsData} messages={props.appState.messagesData}/> }/>
                <Route path='/profile' render={ () => <Profile posts={props.appState.posts}/> } />
                <Route path='/settings' render={ () => <Settings /> }/>
                <Route path='/music' render={ () => <Music /> }/>
                <Route path='/news' render={ () => <News /> }/>
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
