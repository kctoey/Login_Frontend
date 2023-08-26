// path: /pages/login.js
"use client";
import { useState } from "react";

// Change import from 'axios' to 'axios.config.js'
import axios from "axios";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [message, setMessage] = useState("");
  const [userName, setuserName] = useState(null);
  const [name, setName] = useState("");
  const [userEmail, setuserEmail] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const headers = {
      "Content-type": "application/json",
    };
    axios
      .post(
        "http://localhost:8080/user/change-password",
        {
          newPassword: password,
        },
        { headers }
      )
      .then((res) => {
        res.json();
      });
    if (result.status === "ok") {
      //   console.log("Got the token", result.data);
      //   localStorage.setItem("token", result.data);
      alert("Success");
    } else {
      alert(result.error);
    }

    // const body = JSON.stringify({
    //   email: email.current.value,
    //   password: password.current.value,
    // });

    // const res = await axios.post("/user/login", body);
    // console.log(res.data);
  };

  return (
    <div className="container">
      <h1>Change password Page</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
      <h2>{message}</h2>
    </div>
  );
}
