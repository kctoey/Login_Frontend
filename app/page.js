"use client";
import { useRouter } from "next/navigation";
import "./globals.css";
import { TextField, Button } from "@mui/material";

export default function Page() {
  const Router = useRouter();
  const handleClick = () => {
    Router.push("/login");
  };

  return (
    <>
      <div className="font-Monstserrat bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100  flex flex-col justify-center text-center w-screen h-screen ">
        <div className=" bg-slate-200 max-w-[500px] w-full m-auto rounded-3xl shadow-xl p-4">
          <h1 className="p-4 text-3xl  ">Welcome to my page</h1>
          <Button variant="outlined" size="medium" onClick={handleClick}>
            Login
          </Button>
        </div>
      </div>
    </>
  );
}
