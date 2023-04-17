import { useState, useEffect, useCallback, useContext } from "react";
import { User_data } from "../context/appContext";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import jwt_decode from "jwt-decode";
import styles from "../styles/authForm.module.css";

function AuthForm() {
  const { setIsAuthenticated, setAccessToken } = useContext(User_data);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [formSwitch, setFormSwitch] = useState(true);

  var router = useRouter();

  // useEffect(() => {
  // }, []);

  const handleFormSwitch = () => {
    setFormSwitch(!formSwitch);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate email
    if (!/\S+@\S+\.\S+/.test(email)) {
      setErrors({ email: "Please enter a valid email address" });
      return;
    }

    // Validate password
    if (password.length < 6) {
      setErrors({ password: "Password must be at least 6 characters" });
      return;
    }

    const res = await axios.post(
      "http://localhost:5050/login",
      {
        email,
        password,
      },
      {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    );

    if (res.status !== 200) {
      // TODO :  Create custom error message for user
      console.log("incorrect creds or something.. it didn't work");
      return;
    }

    const decodedToken = jwt_decode(res.data.token);

    setAccessToken(res.data.token);
    setIsAuthenticated(true);

    router.push("/dashboard");
  };

  return (
    <div className="container border-2 p-4 m-12 w-4/12 ">
      <div
        className={`flex justify-around m-6 p-4 border-dashed border-2 border-sky-500 ${styles.formSwitch}`}
      >
        <span
          className={`cursor-pointer ${formSwitch ? styles.active : ""}`}
          onClick={handleFormSwitch}
        >
          Login
        </span>
        <span
          className={`cursor-pointer ${!formSwitch ? styles.active : ""}`}
          onClick={handleFormSwitch}
        >
          Signup
        </span>
      </div>
      {formSwitch ? (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-12">
          <input
            type="email"
            id="email"
            value={email}
            placeholder="email *"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-gray-200 border-2 border-gray-300 text-center p-1"
          />
          {/* {errors.email && <span>{errors.email}</span>} */}

          <input
            type="password"
            id="password"
            value={password}
            placeholder="password *"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-gray-200 border-2 border-gray-300 text-center p-1"
          />
          {/* {errors.password && <span>{errors.password}</span>} */}

          <button
            type="submit"
            className="bg-gradient-to-br from-red-200 to-purple-200 via-indigo-200"
          >
            Log In
          </button>
        </form>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-6 mt-12">
          <input
            type="email"
            id="email"
            value={email}
            placeholder="email *"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-gray-200 border-2 border-gray-300 text-center p-1"
          />
          {/* {errors.email && <span>{errors.email}</span>} */}

          <input
            type="password"
            id="password"
            value={password}
            placeholder="password *"
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-gray-200 border-2 border-gray-300 text-center p-1"
          />
          {/* {errors.password && <span>{errors.password}</span>} */}

          <input
            type="text"
            id="name"
            value={name}
            placeholder="name *"
            onChange={(e) => setName(e.target.value)}
            required
            className="bg-gray-200 border-2 border-gray-300 text-center p-1"
          />

          <button
            type="submit"
            className="bg-gradient-to-br from-red-200 to-purple-200 via-indigo-200"
          >
            Sign Up!
          </button>
        </form>
      )}

      <br />
      <br />

      <Link href="/">Home</Link>
    </div>
  );
}
export default AuthForm;
