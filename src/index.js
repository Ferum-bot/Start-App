import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app/App';
import reportWebVitals from './tests/reportWebVitals';

const dialogsData = [
    {
        id: 1,
        label: 'Sahar Ahar'
    },
    {
        id: 2,
        label: 'Lili Reinhart'
    },
    {
        id: 3,
        label: 'Andrey'
    },
    {
        id: 4,
        label: 'Ferum-bot'
    },
    {
        id: 5,
        label: 'Dr_MatJo'
    },
    {
        id: 6,
        label: 'Matvey Popov'
    }
]

ReactDOM.render(
    <App dialogsData={dialogsData}/>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
