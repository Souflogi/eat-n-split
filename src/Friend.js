import Button from "./Button";

const Friend = ({ friend, isSelected, onSelect }) => {
  let owing = `You and ${friend.name} are even`;
  let textClass = "";
  if (friend.balance > 0) {
    owing = `${friend.name} owes you ${Math.abs(friend.balance)}$`;
    textClass = "green";
  }
  if (friend.balance < 0) {
    owing = `You owe ${friend.name} ${Math.abs(friend.balance)}$`;
    textClass = "red";
  }

  const buttonClickHandler = () => {
    isSelected ? onSelect(null) : onSelect(friend.id);
  };

  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />
      <div>
        <h3>{friend.name}</h3>
        <p className={textClass}>{owing}</p>
      </div>
      <Button action={buttonClickHandler}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};
export default Friend;
