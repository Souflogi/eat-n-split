import { useState } from "react";
import Button from "./Button";

// SplitBillForm component handles the logic for splitting a bill with a friend
const SplitBillForm = ({ selected, SetFriends }) => {
  // State variables to manage form input values
  const [bill, setBill] = useState(0); // Total bill amount
  const [myexpense, setMyexpense] = useState(0); // User's share of the expense
  const [whoPays, setWhoPays] = useState("you"); // Tracks who paid (user or friend)

  // Destructuring friend's details from the selected friend object
  const { name, image } = selected;
  const friendExpense = bill - myexpense; // derived state : Calculate the friend's share of the bill

  // Handles splitting the bill when the form is submitted
  const splitHandler = e => {
    e.preventDefault();

    // Calculate the amount to adjust the friend's balance based on who paid
    const newBalance = whoPays === "you" ? friendExpense : -myexpense;

    // Update the selected friend's balance in the friends list
    SetFriends(friends =>
      friends.map(f =>
        f.id === selected.id ? { ...f, balance: f.balance + newBalance } : f
      )
    );
  };

  // Handles input for the user's expense and prevents invalid values
  const myexpenseHandler = e => {
    if (+e.target.value > bill || +e.target.value < 0) return; // Limit to valid range
    setMyexpense(+e.target.value);
  };

  return (
    <form className="form-split-bill">
      <h2>
        Split a bill with <span>{name}</span>
      </h2>

      {/* Friend's image display */}
      <div className="friend-img">
        <img src={image} alt={name} />
      </div>

      {/* Input for total bill */}
      <label>💷 Bill</label>
      <input
        type="number"
        value={bill}
        onChange={e => {
          +e.target.value > 0 && setBill(+e.target.value); // Ensure positive values only
        }}
      />

      {/* Input for user's expense */}
      <label>🫵🏼 Your expense</label>
      <input type="number" value={myexpense} onChange={myexpenseHandler} />

      {/* Display for friend's calculated expense (read-only) */}
      <label>🙍🏼 {name}'s expense</label>
      <input type="text" value={friendExpense} disabled />

      {/* Dropdown to select who paid the bill */}
      <label>❓ Who paid?</label>
      <select value={whoPays} onChange={e => setWhoPays(e.target.value)}>
        <option value="you">You</option>
        <option value="friend">{name}</option>
      </select>

      {/* Button to submit the form and trigger splitHandler */}
      <Button action={splitHandler}>Split</Button>
    </form>
  );
};

export default SplitBillForm;
