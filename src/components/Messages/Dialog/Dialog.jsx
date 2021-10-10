import classes from './Dialog.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    const path = "messages/" + props.dialogId
    const dialogName = props.dialogName
    return (
        <div>
            <div className={classes.DialogItem}>
                <NavLink to={path}>{dialogName}</NavLink>
            </div>
        </div>
    )
}

const Dialog = (props) => {
    return (
        <div className={classes.Dialog}>
            <DialogItem dialogId="1" dialogName="Sahar Ahar"/>
            <DialogItem dialogId="2" dialogName="Lili Reinhart"/>
            <DialogItem dialogId="3" dialogName="Andrey"/>
            <DialogItem dialogId="4" dialogName="Ferum-bot"/>
            <DialogItem dialogId="5" dialogName="Dr_MatJo"/>
            <DialogItem dialogId="6" dialogName="Matvey Popov"/>
        </div>
    )
}

export default Dialog;