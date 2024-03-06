import { useState } from "react";
import Button from "./Button";

const SplitBillForm = ({ selected, SetFriends }) => {
  const [bill, setBill] = useState("");
  const [myexpense, setMyexpense] = useState("");
  const [whoPays, setWhoPays] = useState("you");

  const { name, image } = selected;
  let friendExpense = bill - myexpense;

  const splitHandler = e => {
    e.preventDefault();
    const newBalance = whoPays === "you" ? friendExpense : -myexpense;

    SetFriends(friends =>
      friends.map(f =>
        f.id === selected.id ? { ...f, balance: newBalance + f.balance } : f
      )
    );
  };

  const myexpenseHandler = e => {
    if (+e.target.value > bill || +e.target.value < 0) return;
    setMyexpense(+e.target.value);
  };
  return (
    <form className="form-split-bill">
      <h2>
        split a bill with <span>{name}</span>
      </h2>
      <div className="friend-img">
        <img src={image} alt={name} />
      </div>
      <label>💷 Bill</label>
      <input
        type="number"
        value={bill}
        onChange={e => {
          +e.target.value > 0 && setBill(+e.target.value);
        }}
      />
      <label>🫵🏼 Your expense</label>
      <input type="number" value={myexpense} onChange={myexpenseHandler} />
      <label>🙍🏼 {name}'s expense</label>
      <input type="text" value={friendExpense} disabled />
      <label>❓ Who paied?</label>
      <select value={whoPays} onChange={e => setWhoPays(e.target.value)}>
        <option value="you">You</option>
        <option value="friend">{name}</option>
      </select>
      <Button action={splitHandler}>Split</Button>
    </form>
  );
};

export default SplitBillForm;
