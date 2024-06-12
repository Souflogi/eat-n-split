import Friend from "./Friend";

const FriendList = ({ FrList, selected, onSelect }) => {
  return (
    <ul>
      {FrList.map(f => (
        <Friend
          key={f.id}
          friend={f}
          isSelected={f.id === selected?.id}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
};

export default FriendList;
