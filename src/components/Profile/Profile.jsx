import React from "react";
import classes from './Profile.module.css'
import Posts from "./Posts/Posts";

const topContentImageAddress = 'https://image.shutterstock.com/image-photo/wide-angle-panorama-autumn-forestmisty-260nw-1195159864.jpg'
const profileIconImageAddress = 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'

const Profile = () => {
    return (
        <div>
            <div className={classes.ProfileHeaderDiv}>
                <img src={topContentImageAddress} className={classes.ProfileHeaderImage}/>
            </div>
            <div className={classes.HeaderText}>
                Ava +  description
            </div>
            <Posts />
        </div>
    );
}

export default Profile;