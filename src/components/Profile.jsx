import React from "react";

const topContentImageAddress = 'https://image.shutterstock.com/image-photo/wide-angle-panorama-autumn-forestmisty-260nw-1195159864.jpg'
const profileIconImageAddress = 'https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-800x825.jpg'

const Profile = () => {
    return (
        <div className="Content">
            <img src={topContentImageAddress}/>
            <div>
                Ava +  description
            </div>
            <div>
                My Posts
                <div>
                    New Post
                </div>
            </div>
            <div>
                Post 1
            </div>
            <div>
                Post 2
            </div>
        </div>
    );
}

export default Profile;