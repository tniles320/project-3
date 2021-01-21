import React from "react";
import HomeCard from "../../components/HomeCard";
import API from "../../utils/API";
import "./style.css";

function Home(props) {
  // register user function
  const handleRegister = (event) => {
    event.preventDefault();
    const usernameInput = document.getElementById("username-input").value;
    const passwordInput = document.getElementById("password-input").value;
    const emailInput = document.getElementById("email-input").value;
    const zipInput = document.getElementById("zip-input").value;
    API.register(usernameInput, passwordInput, emailInput, zipInput).then(
      () => {
        API.login(usernameInput, passwordInput).then(() => {
          props.handleUser();
        });
      }
    );
  };

  // user login function
  const handleLogin = (event) => {
    event.preventDefault();
    const usernameLogin = document.getElementById("username-login").value;
    const passwordLogin = document.getElementById("password-login").value;
    API.login(usernameLogin, passwordLogin).then(() => {
      props.handleUser();
    });
  };

  // shows input forms for user to create account
  const createAccount = () => {
    document.getElementById("register-info").style.visibility = "visible";
    document.getElementById("create-account").style.visibility = "hidden";
  };

  return (
    <div className="App">
      <HomeCard
        handleLogin={handleLogin}
        handleRegister={handleRegister}
        createAccount={createAccount}
      />
    </div>
  );
}

export default Home;
