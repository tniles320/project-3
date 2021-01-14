import React from "react";
import "./style.css";

function HomeCard(props) {
  const { handleLogin, handleRegister, createAccount } = props;
  return (
    <div>
      <h3 className="header">
        Are you looking for work or looking to get some work done?
      </h3>

      <div className="create-account">
        <div className="description">
          <p>
            Create an account to find a local job or to post a job offer. Once
            your account is created you will be able to post what gigs you are
            looking for in your neighborhood. Whether it's assembling furniture,
            setting up surround sound, walking a dog, or creating an interactive
            website. MANY GIGS is YOUR SPOT!
          </p>
          <button id="create-account" onClick={createAccount}>
            Create new account
          </button>
        </div>

        <div className="register-container">
          <div>
            <h1>Register</h1>
            <form id="register-info">
              <input type="text" id="username-input" placeholder="Username" />
              <input
                type="password"
                id="password-input"
                placeholder="Password"
              />
              <input type="email" id="email-input" placeholder="Email" />
              <input type="text" id="zip-input" placeholder="Zip Code" />
              <button onClick={handleRegister}>Submit</button>
            </form>
          </div>

          <h1>Login</h1>
          <div className="login">
            <p>Username</p>
            <input type="text" id="username-login" placeholder="username" />
            <p>Password</p>
            <input type="password" id="password-login" placeholder="password" />
            <p></p>
            <button onClick={handleLogin}>Submit</button>
          </div>

        </div>
      </div>
    </div>
  );
}

export default HomeCard;
