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

    const dialogItems = dialogsData.map((data) => {
        return <DialogItem dialogId={data.id} dialogName={data.label}/>
    })

    return (
        <div className={classes.Dialog}>{dialogItems}</div>
    )
}

export default Dialog;