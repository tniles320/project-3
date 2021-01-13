import React from "react";
import "./style.css";

function HomeCard(props) {
  const { login, register, createAccount } = props;
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
        </div>

        <div className="register-container">
          <div>
            <h1>Register</h1>
            <form id="register-info">
              <input type="text" placeholder="Username" />
              <input type="password" placeholder="Password" />
              <input type="email" placeholder="Email" />
              <input type="number" placeholder="Zip Code" />
              <button onClick={register}>Submit</button>
            </form>
          </div>

          <h1>Login</h1>
          <div className="login">
            <p>Username</p>
            <input type="text" placeholder="username" />
            <p>Password</p>
            <input type="password" placeholder="password" />
            <p></p>
            <button onClick={login}>Submit</button>
          </div>

          <button id="create-account" onClick={createAccount}>
            Create new account
          </button>
        </div>
      </div>
    </div>
  );
}

export default HomeCard;
