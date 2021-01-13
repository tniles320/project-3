import React, { useState, useEffect } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Navbar from "./components/Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import NoMatch from "./pages/NoMatch";
import Axios from "axios";
import UserContext from "./utils/UserContext";
import API from "./utils/API";

function App() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    zipCode: "",
    rating: "",
    posts: [],
    loggedIn: false,
  });

  const handleUser = () => {
    API.getUser().then((res) => {
      if (res.data) {
        setUser({
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

  const logout = (event) => {
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
              {user.loggedIn ? <Dashboard /> : <Home handleUser={handleUser} />}
            </Route>
            <Route exact path="/account">
              {user.loggedIn ? <Account logout={logout} /> : <Home />}
            </Route>
            <Route exact path="/dashboard">
              {user.loggedIn ? <Dashboard logout={logout} /> : <Home />}
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
