import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Post from "./pages/Post";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import UserContext from "./utils/UserContext";
import API from "./utils/API";

function App() {
  let loggedIn = false;
  const [user, setUser] = useState({
    username: "",
    email: "",
    zipCode: "",
    rating: "",
    posts: [],
    loggedIn: false,
  });

  // sets user state when the page is loaded
  const handleUser = async () => {
    await API.getUser().then((res) => {
      if (res.data) {
        return setUser({
          username: res.data.username,
          email: res.data.email,
          zipCode: res.data.zipCode,
          rating: res.data.rating,
          posts: res.data.posts,
          loggedIn: true,
        });
      }
    });
  };

  useEffect(() => {
    handleUser();
  }, []);

  // logout function with axios call utilizing API
  const handleLogout = (event) => {
    event.preventDefault();

    API.logout().then((res) => {
      console.log("successfully logged out!");
      console.log(res.status);
      if (res.status === 200) {
        setUser({
          username: "",
          email: "",
          zipCode: "",
          rating: "",
          posts: [],
          loggedIn: false,
        });
      }
    });
  };
  console.log(user);

  return (
    <UserContext.Provider value={user}>
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              {user.loggedIn ? (
                <Dashboard handleLogout={handleLogout} />
              ) : (
                <Home handleUser={handleUser} />
              )}
            </Route>
            <Route exact path="/account">
              {user.loggedIn ? (
                <Account handleLogout={handleLogout} />
              ) : (
                <Home handleUser={handleUser} />
              )}
            </Route>
            <Route exact path="/dashboard">
              {user.loggedIn ? (
                <Dashboard handleLogout={handleLogout} />
              ) : (
                <Home handleUser={handleUser} />
              )}
            </Route>
            <Route exact path="/post">
              {user.loggedIn ? <Post /> : <Home handleUser={handleUser} />}
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
