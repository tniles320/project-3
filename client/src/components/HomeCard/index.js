import React from "react";
import "./style.css";

function HomeCard(props) {
  const {
    setRegisterUsername,
    setRegisterPassword,
    setLoginUsername,
    setLoginPassword,
    getUser,
    login,
    register,
    data,
    createAccount,
    setRegisterEmail,
    setRegisterZipCode,
  } = props;
  return (
    <div>
      <div>
        <button id="create-account" onClick={createAccount}>
          Create new account
        </button>
      </div>
      <div id="register-info">
        <h1>Register</h1>
        <input
          placeholder="Username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder="Password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <input
          placeholder="Email"
          onChange={(e) => setRegisterEmail(e.target.value)}
        />
        <input
          placeholder="Zip Code"
          onChange={(e) => setRegisterZipCode(e.target.value)}
        />
        <button onClick={register}>Submit</button>
      </div>

      <div>
        <h1>Login</h1>
        <div className="login">
          <input
            placeholder="username"
            onChange={(e) => setLoginUsername(e.target.value)}
          />
          <input
            placeholder="password"
            onChange={(e) => setLoginPassword(e.target.value)}
          />
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
