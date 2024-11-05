import Button from "./Button"; // Importing the Button component

// Friend component to display information about a friend and handle selection
const Friend = ({ friend, isSelected, onSelect }) => {
  // Initial text for balance status (if friend has a zero balance)
  let owing = `You and ${friend.name} are even`;
  let textClass = ""; // Initial CSS class for balance text

  // Check if the friend owes the user money
  if (friend.balance > 0) {
    owing = `${friend.name} owes you ${Math.abs(friend.balance)}$`; // Display amount friend owes
    textClass = "green"; // Apply "green" class to indicate positive balance
  }

  // Check if the user owes the friend money
  if (friend.balance < 0) {
    owing = `You owe ${friend.name} ${Math.abs(friend.balance)}$`; // Display amount user owes
    textClass = "red"; // Apply "red" class to indicate negative balance
  }

  // Handler for button click, toggles selection of the friend
  const buttonClickHandler = () => {
    isSelected ? onSelect(null) : onSelect(friend.id); // Deselect if selected, otherwise select friend by id
  };

  return (
    <li className={isSelected ? "selected" : ""}>
      {" "}
      {/* Apply "selected" class if friend is selected */}
      <img src={friend.image} alt={friend.name} />{" "}
      {/* Friend's profile image */}
      <div>
        <h3>{friend.name}</h3> {/* Friend's name */}
        <p className={textClass}>{owing}</p>{" "}
        {/* Balance information with color styling */}
      </div>
      {/* Button component to select/deselect friend */}
      <Button action={buttonClickHandler}>
        {isSelected ? "Close" : "Select"}{" "}
        {/* Button label changes based on selection state */}
      </Button>
    </li>
  );
};

export default Friend; // Export the Friend component
