"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";

export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });
  //   const [buttonDisabled, setButtonDisabled] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  //   const onLogin = async () => {

  //   };

  //   useEffect(() => {
  //     if (user.email.length > 0 && user.password.length > 0) {
  //       setButtonDisabled(false);
  //     } else {
  //       setButtonDisabled(true);
  //     }
  //   }, [user]);

  return (
    <div className="min-h-screen w-full flex">
      <div className="w-60 bg-indigo-800 p-6 text-indigo-100">
        <h1 className="text-xl uppercase font-bold">Apt App</h1>
      </div>
      <div className="grow p-6">faasdfasdgasd</div>
    </div>
  );
}
