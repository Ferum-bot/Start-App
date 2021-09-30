import React from "react";
import classes from './Profile.module.css'

const topContentImageAddress = 'https://image.shutterstock.com/image-photo/wide-angle-panorama-autumn-forestmisty-260nw-1195159864.jpg'
const profileIconImageAddress = 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'

const Profile = () => {
    return (
        <div className={classes.Profile}>
            <div className={classes.ProfileHeaderDiv}>
                <img src={topContentImageAddress} className={classes.ProfileHeaderImage}/>
            </div>
            <div className={classes.Item}>
                Ava +  description
            </div>
            <div className={classes.Item}>
                My Posts
                <div>
                    New Post
                </div>
            </div>
            <div className={classes.Item}>
                Post 1
            </div>
            <div className={classes.Item}>
                Post 2
            </div>
        </div>
    );
}

export default Profile;