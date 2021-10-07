import './App.css';
import React from "react";
import Header from "../components/Header/Header";
import NavBar from "../components/NavBar/NavBar";
import Profile from "../components/Profile/Profile";
import Dialogs from "../components/Dialogs/Dialogs";
import Settings from "../components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
import Music from "../components/Music /Music";
import News from "../components/News/News";

function App() {
  return (
      <BrowserRouter>
        <div className="App">
            <Header />
            <NavBar />
            <div className="Content">
                <Route path='/messages' component={Dialogs}/>
                <Route path='/profile' component={Profile}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/music' component={Music}/>
                <Route path='/news' component={News}/>
            </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
