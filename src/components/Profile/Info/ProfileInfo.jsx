import classes from "./ProfileInfo.module.css";

const topContentImageAddress = 'https://image.shutterstock.com/image-photo/wide-angle-panorama-autumn-forestmisty-260nw-1195159864.jpg'

const ProfileInfo = (props) => {
    return (
        <div>
            <div className={classes.ProfileHeaderDiv}>
                <img src={topContentImageAddress} className={classes.ProfileHeaderImage}/>
            </div>
            <div className={classes.HeaderText}>
                Ava +  description
            </div>
        </div>
    )
}

export default ProfileInfo;