import { useState, useEffect } from "react";
import Link from "next/link";

function Login() {
  const [name, setName] = useState("");

  useEffect(() => {
    setName("bill");
  });

  return (
    <>
      <div>Hello {name ? name : "DEFAULT NAME"}</div>
      <Link href="/home">home</Link>
    </>
  );
}
export default Login;
