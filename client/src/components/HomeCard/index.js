import React from "react";
import "./style.css";

function HomeCard(props) {
  const { getUser, login, register, data, createAccount } = props;
  return (
    <div>
      <div>
        <button id="create-account" onClick={createAccount}>
          Create new account
        </button>
      </div>
      <div id="register-info">
        <h1>Register</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <input type="email" placeholder="Email" />
        <input type="number" placeholder="Zip Code" />
        <button onClick={register}>Submit</button>
      </div>

      <div>
        <h1>Login</h1>
        <div className="login">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="password" />
          <button onClick={login}>Submit</button>
        </div>
      </div>

      <div>
        <h1>Get User</h1>
        <button onClick={getUser}>Submit</button>
        {data ? <h1>Welcome Back {data.username}</h1> : null}
      </div>
    </div>
  );
}

export default HomeCard;
