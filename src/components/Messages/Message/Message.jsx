import classes from './Message.module.css'

const Message = (props) => {
    const text = props.text
    return (
        <div className={classes.Message}>
            {text}
        </div>
    )
}

export default Message