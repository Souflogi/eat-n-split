import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import SplitBillForm from "./SplitBillForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [friends, SetFriends] = useState(initialFriends);

  const addFriend = ({ name, url }) => {
    SetFriends(friends => [
      ...friends,
      { name, image: url, balance: 0, id: Math.random() },
    ]);
  };
  useEffect(() => {
    // setSelectedFriend(() => friends[friends.length - 1])
    setSelectedFriend(null);
  }, [friends]);

  const selectFriend = id => {
    const target = friends.filter(f => f.id === id)[0];
    setSelectedFriend(target);
  };
  return (
    <div className="app">
      <SideBar
        FrList={friends}
        onAdd={addFriend}
        onSelect={selectFriend}
        selected={selectedFriend}
      />
      {selectedFriend ? (
        <SplitBillForm selected={selectedFriend} SetFriends={SetFriends} />
      ) : (
        <h1 className="big-title">EAT AND SPLIT</h1>
      )}
    </div>
  );
}

export default App;
