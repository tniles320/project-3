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

  useEffect(() => {
    document.title = "ManyGigs";

    if (!user) {
      return;
    }

    API.getUser(user).then((res) => {
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
  }, [user]);

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

  if (user.loggedIn) {
    return (
      <Router>
        <div>
          <UserContext.Provider value={user}>
            <Switch>
              <Route exact path="/">
                <Redirect to="/dashboard" />
              </Route>
              <Route>
                <Navbar logout={logout} />
                <Dashboard exact path="/dashboard" />
              </Route>
              <Route>
                <Account exact path="/account" logout={logout} />
              </Route>
              <Route>
                <NoMatch />
              </Route>
            </Switch>
          </UserContext.Provider>
        </div>
      </Router>
    );
  } else {
    return (
      <Router>
        <div>
          <Switch>
            <Route>
              <Home exact path="/" />
            </Route>
            <Route>
              <NoMatch />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
