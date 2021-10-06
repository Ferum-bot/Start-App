import classes from './Post.module.css'

const Post = (props) => {
    return (
      <div className={classes.Item}>
          {props.postText}
      </div>
    );
}
export default Post;