import { useState } from "react";
import AddFriendForm from "./AddFriendForm";
import Button from "./Button";
import FreindList from "./FriendList";

export default function SideBar({ FrList, onAdd, onSelect, selected }) {
  const [adding, setAdding] = useState(false);

  return (
    <div className="sidebar">
      <FreindList FrList={FrList} selected={selected} onSelect={onSelect} />
      {adding && (
        <AddFriendForm
          onAdd={onAdd}
          setAdding={setAdding}
          onSelect={onSelect}
        />
      )}
      <Button action={setAdding.bind(null, !adding)}>
        {adding ? "close" : "Add friend"}
      </Button>
    </div>
  );
}
