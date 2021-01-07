import React from "react";
import Login from "./Login";
import Register from "./Register";

function Home() {
  return (
    <div>
      <div className="App">
        <div>
          <h1>Register</h1>
          <input
            placeholder="username"
            onChange={(e) => setRegisterUsername(e.target.value)}
          />
          <input
            placeholder="password"
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <button onClick={register}>Submit</button>
        </div>

        <div>
          <h1>Login</h1>
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

        <div>
          <h1>Get User</h1>
          <button onClick={getUser}>Submit</button>
          {data ? <h1>Welcome Back {data.username}</h1> : null}
        </div>
      </div>
    </div>
  );
}

export default Home;
