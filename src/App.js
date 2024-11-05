import { useEffect, useState } from "react";
import SideBar from "./SideBar";
import SplitBillForm from "./SplitBillForm";
import FriendList from "./FriendList";
import AddFriendForm from "./AddFriendForm";
import Button from "./Button";

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
  const [addFormOpen, setAddFormOpen] = useState(false);

  useEffect(() => {
    // setSelectedFriend(() => friends[friends.length - 1])
    setSelectedFriend(null);
  }, [friends]);

  const addFriend = ({ name, url }) => {
    SetFriends(friends => [
      ...friends,
      { name, image: url, balance: 0, id: Math.random() },
    ]);
  };
  const selectFriend = id => {
    if (addFormOpen) setAddFormOpen(false);
    if (!id) {
      setSelectedFriend(null);
      return;
    }
    const target = friends.filter(f => f.id === id)[0];
    setSelectedFriend(target);
  };

  const switchForm = () => {
    setAddFormOpen(adding => !adding);
    setSelectedFriend(null);
  };

  return (
    <div className="app">
      <SideBar>
        {!addFormOpen && (
          <FriendList
            FrList={friends}
            selected={selectedFriend}
            onSelect={selectFriend}
          />
        )}
        {addFormOpen && (
          <AddFriendForm
            onAdd={addFriend}
            setAddFormOpen={setAddFormOpen}
            onSelect={setSelectedFriend}
          />
        )}
        <Button action={switchForm}>
          {addFormOpen ? "close" : "Add friend"}
        </Button>
      </SideBar>
      {selectedFriend ? (
        <SplitBillForm
          key={selectedFriend.id}
          selected={selectedFriend}
          SetFriends={SetFriends}
        />
      ) : (
        <h1 className="big-title">EAT AND SPLIT</h1>
      )}
    </div>
  );
}

export default App;
