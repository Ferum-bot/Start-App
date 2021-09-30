import React from "react";
import classes from './NavBar.module.css'

const NavBar = () => {
    return (
        <nav className={classes.AppNavigation}>
            <div className={classes.Item}>
                <a>Profile</a>
            </div>
            <div className={classes.Item}>
                <a>Messages</a>
            </div>
            <div className={classes.Item}>
                <a>News</a>
            </div>
            <div className={classes.Item}>
                <a>Music</a>
            </div>
            <div className={classes.Item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default NavBar;