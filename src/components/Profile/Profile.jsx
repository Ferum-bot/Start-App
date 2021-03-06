import React from "react";
import classes from './Profile.module.css'
import Posts from "./Posts/Posts";
import ProfileInfo from "./Info/ProfileInfo";

const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <Posts posts={props.posts}/>
        </div>
    );
}

export default Profile;