import { useState } from "react";
import Button from "./Button";

export default function AddFriendForm({ onAdd, setAdding }) {
  const [name, setName] = useState("");
  const [url, setUrl] = useState(
    `https://i.pravatar.cc/48?img=${
      Math.floor(Math.random() * (67 - 1 + 1)) + 1
    }`
  );

  const submitHandler = e => {
    e.preventDefault();

    if (name === "") return;

    onAdd({ name, url });
    setName("");
    setAdding(adding => !adding);
  };

  return (
    <form className="form-add-friend">
      <label>🙍🏼 Friend name</label>
      <input type="text" value={name} onChange={e => setName(e.target.value)} />

      <label>📷 Image URL</label>
      <input type="text" value={url} onChange={e => setUrl(e.target.value)} />

      <Button action={submitHandler}>Add</Button>
    </form>
  );
}
