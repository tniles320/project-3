import React, { useState } from "react";
import Axios from "axios";
import HomeCard from "../../components/HomeCard";
import "./style.css";

function Home() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [data, setData] = useState(null);
  const register = () => {
    Axios({
      method: "POST",
      data: {
        username: registerUsername,
        password: registerPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/register",
    }).then((res) => console.log(res));
  };
  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:3001/login",
    }).then((res) => console.log(res));
  };
  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
  const createAccount = () => {
    document.getElementById("register-info").style.visibility = "visible";
  };
  return (
    <div className="App">
      <h1>ManyGigs</h1>
      <HomeCard
        setRegisterUsername={setRegisterUsername}
        setRegisterPassword={setRegisterPassword}
        setLoginUsername={setLoginUsername}
        setLoginPassword={setLoginPassword}
        getUser={getUser}
        login={login}
        register={register}
        data={data}
        createAccount={createAccount}
        // setRegisterEmail={setRegisterEmail}
        // setRegisterZipCode={setRegisterZipCode}
      />
    </div>
  );
}

export default Home;
