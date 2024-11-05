import { useState } from "react";
import Button from "./Button";
const generateRandomUrl = () =>
  `https://i.pravatar.cc/48?img=${Math.floor(Math.random() * 67) + 1}`;

export default function AddFriendForm({ onAdd, setAddFormOpen }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState(generateRandomUrl());

  const randomPic = e => {
    e.preventDefault();
    setUrl(generateRandomUrl());
  };

  const submitHandler = e => {
    e.preventDefault();

    if (name === "") return;

    onAdd({ name, url });
    setName("");
    setAddFormOpen(false);
  };

  return (
    <form className="form-add-friend">
      <label>🙍🏼 Friend name</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />

      <label>📷 Profile picture</label>
      <div className="profile-picture">
        <img src={url} alt="profile" />
        <button type="button" onClick={randomPic}>
          🔁
        </button>
      </div>

      <Button action={submitHandler}>Add</Button>
    </form>
  );
}
