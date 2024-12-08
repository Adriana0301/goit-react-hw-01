import {
    profileContainer,
    profileWrapper,
    profileImage,
    profileUsername,
    profileTag,
    profileLocation,
    profileList,
    profileListItem,
    profileListItemText,
    profileListItemNumber
  } from "../Profile/Profile.module.css";

const Profile = ({username, tag, location, image, stats}) => {
    return (
    <div className={profileContainer}>
        <div className={profileWrapper}>
        <img
        src = {image}
        alt="User avatar" className= {profileImage} width="150"
        />
        <p className={profileUsername}>{username}</p>
        <p className={profileTag}>@{tag}</p>
        <p className={profileLocation}>{location}</p>
        </div>
        <ul className={profileList}>
        <li className={profileListItem}>
        <span className={profileListItemText}>Followers</span>
        <span className={profileListItemNumber}>{stats.followers}</span>
        </li>
        <li className={profileListItem}>
        <span className={profileListItemText}>Views</span>
        <span className={profileListItemNumber}>{stats.views}</span>
        </li>
        <li className={profileListItem}>
        <span className={profileListItemText}>Likes</span>
        <span className={profileListItemNumber}>{stats.likes}</span>
        </li>
        </ul>
        </div>)
}


export default Profile;