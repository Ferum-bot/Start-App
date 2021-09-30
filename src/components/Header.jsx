import React from 'react';
import './../App.css'

const headerImageAddress = 'https://cdn.logo.com/hotlink-ok/logo-social.png'

const Header = () => {
    return (
        <header className="App-header">
            <img src={headerImageAddress} align="left"/>
        </header>
    );
}

export default Header;