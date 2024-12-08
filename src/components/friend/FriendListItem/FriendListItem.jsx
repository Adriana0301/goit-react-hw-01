import { friendImg, friendName, online, offline } from "./FriendListItem.module.css";

function FriendListItem({friend: {avatar, name, isOnline: isTrue}}) {
    return (
    <>
        <img className={friendImg} src={avatar} alt="Avatar" width="50" />
        <p className = {friendName}>{name}</p>
        <p className={isTrue ? online : offline}>{isTrue ? 'Online' : 'Offline'}</p>
    </>
    )
}

export default FriendListItem;