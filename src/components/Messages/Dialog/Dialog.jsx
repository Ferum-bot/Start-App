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

    const dialogItems = props.dialogsData.map((data) => {
        return <DialogItem dialogId={data.id} dialogName={data.label}/>
    })

    return (
        <div className={classes.Dialog}>{dialogItems}</div>
    )
}

export default Dialog;