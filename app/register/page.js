// path: /pages/login.js
"use client";
import { useState } from "react";
import { TextField, Button } from "@mui/material";
import { useRouter } from "next/navigation";

// Change import from 'axios' to 'axios.config.js'
import axios from "axios";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userName, setuserName] = useState(null);
  const [name, setName] = useState("");
  const [userEmail, setuserEmail] = useState(null);
  const Router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const headers = {
      "Content-type": "application/json",
    };
    axios
      .post(
        "https://login-backend-uyxf.onrender.com/user/signup",
        {
          name,
          email,
          password,
        },
        { headers }
      )
      .then((res) => {
        setMessage(res.data.message);
        Router.push("/login");
      })
      .catch((err) => {
        alert("cannot signup");
      });
    // const body = JSON.stringify({
    //   email: email.current.value,
    //   password: password.current.value,
    // });

    // const res = await axios.post("/user/login", body);
    // console.log(res.data);
  };

  return (
    <div className="font-Monstserrat bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100  flex flex-col justify-center text-center w-screen h-screen ">
      <div className=" bg-slate-200 max-w-[500px] w-full m-auto rounded-3xl shadow-xl p-4">
        <h1 className="p-4 text-3xl  ">Register Page</h1>
        <form className="p-4" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-center items-center space-y-4">
            <TextField
              variant="outlined"
              required
              type="text"
              label="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <TextField
              variant="outlined"
              required
              type="email"
              label="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              required
              type="password"
              label="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <Button variant="outlined" size="medium" type="submit">
              Submit
            </Button>
          </div>
        </form>
        <h2>{message}</h2>
      </div>
    </div>
  );
}
