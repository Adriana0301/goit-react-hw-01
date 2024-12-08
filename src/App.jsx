import Profile from '../src/components/Profile/Profile';
import userData from './components/Profile/userData.json';

import FriendList from './components/friend/FriendList';
import friends from './components/friend/friends.json';

import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import transactions from './components/TransactionHistory/transactions.json';


function App() {
    return (
      <>
        <Profile
          username={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
        <FriendList friends={friends}/>
        <TransactionHistory items={transactions} />
      </>
    );
  }

export default App;