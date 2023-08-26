"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { useContext } from "react";
import { AppContext } from "../../context/UserContext";
import { TextField, Button } from "@mui/material";

const Logout = () => {
  const [isLoggedOut, setIsLoggedOut] = useState(false);
  const router = useRouter();
  const { token, username } = useContext(AppContext);

  const handleLogout = () => {
    fetch("http://localhost:8080/user/userData", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "applicationjson",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: token,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data == "token expired") {
          router.push("/");
        }
      });

    setIsLoggedOut(true);
    router.push("/");
  };

  return (
    <div className="font-Monstserrat bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100  flex flex-col justify-center text-center w-screen h-screen ">
      <div className=" bg-slate-200 max-w-[500px] w-full m-auto rounded-3xl shadow-xl p-4">
        {isLoggedOut ? (
          <h1 className="p-4 text-3xl  ">You have been logged out</h1>
        ) : (
          <div className="space-y-4">
            <h2 className="pt-4 text-3xl  ">Profile</h2>
            <p>Name:{username}</p>
            <Button variant="outlined" size="medium" onClick={handleLogout}>
              Logout
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Logout;
