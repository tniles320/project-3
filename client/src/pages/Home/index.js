import React, { useState } from "react";
import Axios from "axios";
import HomeCard from "../../components/HomeCard";
import "./style.css";

function Home(props) {
  const [data, setData] = useState(null);

  // register user function
  const register = () => {
    const userInput = document.getElementById("register-info").childNodes;
    Axios({
      method: "POST",
      data: {
        username: userInput[0].value,
        password: userInput[1].value,
        email: userInput[2].value,
        zipCode: userInput[3].value,
      },
      withCredentials: true,
      url: "http://localhost:3001/register",
    }).then((res) => {
      Axios({
        method: "POST",
        data: {
          username: userInput[0].value,
          password: userInput[1].value,
        },
        withCredentials: true,
        url: "http://localhost:3001/login",
      }).then((res) => {
        console.log(res);
        // props.handleUser();
      });
    });
  };
  // user login function
  const login = () => {
    const loginInput = document.querySelector(".login").childNodes;
    Axios({
      method: "POST",
      data: {
        username: loginInput[1].value,
        password: loginInput[3].value,
      },
      withCredentials: true,
      url: "http://localhost:3001/login",
    }).then((res) => {
      console.log(res);
      props.handleUser();
    });
  };

  // get user function
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
      <HomeCard
        getUser={getUser}
        login={login}
        register={register}
        data={data}
        createAccount={createAccount}
      />
    </div>
  );
}

export default Home;
