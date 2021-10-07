import React from "react";
import classes from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={classes.AppNavigation}>
            <div className={classes.Item}>
                <a href="/profile">Profile</a>
            </div>
            <div className={classes.Item}>
                <a href="/messages">Messages</a>
            </div>
            <div className={classes.Item}>
                <a href="/news">News</a>
            </div>
            <div className={classes.Item}>
                <a href="/music">Music</a>
            </div>
            <div className={classes.Item}>
                <a href="/settings">Settings</a>
            </div>
        </nav>
    );
}

export default NavBar;