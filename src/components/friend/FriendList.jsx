import FriendListItem from '../friend/FriendListItem/FriendListItem';
import { friendContainer, friendsList, friendsListItem } from './FriendList.module.css';

function  FriendList({friends}) {
  return (
    <div className={friendContainer}>
      <ul className={friendsList}>
        {friends.map(friend => (
          <li className={friendsListItem} key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default FriendList;