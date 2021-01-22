import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Post from "./pages/Post";
import SinglePost from "./pages/SinglePost";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import UserContext from "./utils/UserContext";
import API from "./utils/API";

function App() {
  const [user, setUser] = useState({ loggedIn: false });

  // sets user state when the page is loaded
  const handleUser = async () => {
    await API.getUser().then((res) => {
      if (res.data._id) {
        return setUser({ ...res.data, loggedIn: true });
      }
    });
  };

  useEffect(() => {
    handleUser();
  }, []);

  // logout function with axios call utilizing API
  const handleLogout = async () => {
    await API.logout().then((res) => {
      console.log("successfully logged out!");
      if (res.status === 200) {
        setUser({ loggedIn: false });
      }
    });
  };

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
            <Route path="/account">
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
            <Route path="/post/:id">
              {user.loggedIn ? (
                <SinglePost handleLogout={handleLogout} />
              ) : (
                <Home handleUser={handleUser} />
              )}
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
