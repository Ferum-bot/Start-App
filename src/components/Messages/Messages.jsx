import classes from './Messages.module.css'
import {NavLink} from "react-router-dom";

const Messages = (props) => {
    return (
        <div className={classes.MainDiv}>
            <div className={classes.Dialog}>
                <div className={classes.ActiveDialogItem}>
                    <NavLink to="messages/1">Matvey Popov</NavLink>
                </div>
                <div className={classes.DialogItem}>
                    <NavLink to="messages/2">Sahar Ahar</NavLink>
                </div>
                <div className={classes.DialogItem}>
                    <NavLink to="messages/3">Lili Reinhart</NavLink>
                </div>
                <div className={classes.DialogItem}>
                    <NavLink to="messages/4">Andrey</NavLink>
                </div>
                <div className={classes.DialogItem}>
                    <NavLink to="messages/5">Ferum-bot</NavLink>
                </div>
                <div className={classes.DialogItem}>
                    <NavLink to="messages/6">Dr_MatJo</NavLink>
                </div>
            </div>
            <div className={classes.Messages}>
                <div className={classes.Message}>
                    Hello
                </div>
                <div className={classes.Message}>
                    Good
                </div>
                <div className={classes.Message}>
                    Back again back
                </div>
            </div>

        </div>
    );
}

export default Messages;