import React from 'react';
import classes from './Header.module.css';

const headerImageAddress = 'https://cdn.logo.com/hotlink-ok/logo-social.png'

const Header = () => {
    return (
        <header className={classes.Header}>
            <img src={headerImageAddress} align="left" className={classes.Icon}/>
        </header>
    );
}

export default Header;