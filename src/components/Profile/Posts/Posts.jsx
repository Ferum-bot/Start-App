import classes from './Posts.module.css'
import Post from "./Post/Post";

const Posts = (props) => {
    const postComponents = props.posts.map(post => <Post postText={post.postText}/>)

    return (
        <div className={classes.TopDiv}>
            <h3 className={classes.MyPosts}>My posts</h3>
            <div className={classes.PostsInputDiv}>
                <div>
                    <textarea>Write Something</textarea>
                </div>
                <div>
                    <button className={classes.SendButton} onClick={onSendButtonClick}>Send Post</button>
                </div>
            </div>
            {postComponents}
        </div>
    );
}

const onSendButtonClick = () => {
    console.log("On Send Button Clicked!")
}

export default Posts;