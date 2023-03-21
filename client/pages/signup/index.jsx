import { useState } from "react";
import axios from "axios";

const SignUpForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVerify, setPasswordVerify] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== passwordVerify) {
      alert("Passwords do not match");
      return;
    }
    const res = await axios.post(
      "http://localhost:3000/login",
      {
        email,
        password,
      },
      {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    );

    console.log(res);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="passwordVerify">Verify Password</label>
      <input
        type="password"
        id="passwordVerify"
        value={passwordVerify}
        onChange={(e) => setPasswordVerify(e.target.value)}
      />
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUpForm;
