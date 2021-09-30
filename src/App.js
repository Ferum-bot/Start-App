import './App.css';
import React from "react";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="App">
        <Header />
        <NavBar />
        <Profile />
    </div>
  );
}

export default App;
