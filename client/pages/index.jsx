import Link from "next/link";

import { useState } from "react";
import jwt from "jsonwebtoken";

function Home() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("You are not logged in.");

  async function submitForm() {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    }).then((t) => t.json());

    const token = res.token;

    if (token) {
      const json = jwt.decode(token);

      console.log(json);
      setMessage(
        `Welcome ${json.username} and you are ${
          json.admin ? "and admin" : "not an admin"
        }`
      );
    } else {
      setMessage("Something went wrong ");
    }
  }

  return (
    <div>
      <h1>{message}</h1>
      <form>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <br />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <br />
        <input type="button" value="Login" onClick={submitForm} />
      </form>
    </div>
  );
}

export default Home;
