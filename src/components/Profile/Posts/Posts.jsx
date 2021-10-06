import classes from './Posts.module.css'
import Post from "./Post/Post";

const Posts = () => {
    return (
        <div className={classes.TopDпiv}>
            <div className={classes.PostsInputDiv}>
                <textarea>Write Something</textarea>
                <button className={classes.SendButton} onClick={onSendButtonClick}>Send Post</button>
            </div>
            <Post postText = "Hello world"/>
            <Post postText = "Hello All"/>
            <Post postText = "Goodbuy Matvey"/>
        </div>
    );
}

const onSendButtonClick = () => {
    console.log("On Send Button Clicked!")
}

export default Posts;