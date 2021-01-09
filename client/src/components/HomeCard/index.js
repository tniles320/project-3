import React from "react";
import "./style.css";

function HomeCard(props) {
  const {
    setRegisterUser,
    setLoginUsername,
    setLoginPassword,
    getUser,
    login,
    register,
    data,
    createAccount,
  } = props;
  //   const { username, password, email, zipCode } = setRegisterUser;
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
          onChange={(e) => setRegisterUser({ username: e.target.value })}
        />
        <input
          placeholder="Password"
          onChange={(e) => setRegisterUser({ password: e.target.value })}
        />
        <input
          placeholder="Email"
          onChange={(e) => setRegisterUser({ email: e.target.value })}
        />
        <input
          placeholder="Zip Code"
          onChange={(e) => setRegisterUser({ zipCode: e.target.value })}
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
