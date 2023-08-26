"use client";
import { TextField, Button } from "@mui/material";
import axios from "axios";
import { useContext, useState } from "react";
import { AppContext } from "../../context/UserContext";
import { useRouter } from "next/navigation";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(null);

  const { username, setUsername, setToken } = useContext(AppContext);
  const Router = useRouter();
  const handleClick2 = () => {
    Router.push("/register");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const headers = {
      "Content-type": "application/json",
    };
    axios
      .post(
        "https://login-backend-uyxf.onrender.com/user/signin",
        {
          email,
          password,
        },
        { headers }
      )
      .then((res) => {
        setMessage(res.data.message);
        if (res.data.status === "ok") {
          setUsername(res.data.data[0].name);
          setToken(res.data.token);
          Router.push("/userdata");
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="font-Monstserrat bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100  flex flex-col justify-center text-center w-screen h-screen ">
      <div className=" bg-slate-200 max-w-[500px] w-full m-auto rounded-3xl shadow-xl p-4">
        <h1 className="p-4 text-3xl  ">Login</h1>
        <form className="p-4" onSubmit={handleSubmit}>
          <div className="py-4">
            <TextField
              required
              type="email"
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="py-4">
            <TextField
              type="password"
              required
              id="outlined-basic"
              label="Password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="pt-4">
            <Button variant="outlined" size="medium" type="submit">
              Login
            </Button>

            <h1 className="pt-4"> {message}</h1>
          </div>
        </form>
        <p>
          Don't have account{" "}
          <span
            className="text-blue-500 font-bold cursor-pointer hover:underline"
            onClick={handleClick2}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await handleSubmit;
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
export default Page;
