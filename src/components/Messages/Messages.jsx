import classes from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Messages = (props) => {
    const messageComponents = props.messages.map(value => {
        return <Message text={value.text}/>
    })

    return (
        <div className={classes.MainDiv}>
            <Dialog dialogsData={props.dialogsData}/>
            <div className={classes.Messages}>
                {messageComponents}
            </div>
        </div>
    );
}

export default Messages;