import classes from './Messages.module.css'
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Messages = (props) => {
    return (
        <div className={classes.MainDiv}>
            <Dialog dialogsData={props.messagesData}/>
            <div className={classes.Messages}>
                <Message text="Who are you?"/>
                <Message text="Who are am?"/>
                <Message text="YES"/>
            </div>

        </div>
    );
}

export default Messages;