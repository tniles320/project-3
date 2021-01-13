import React from "react";

const UserContext = React.createContext({
  username: "",
  email: "",
  zipCode: "",
  rating: "",
  posts: [],
  loggedIn: false,
});

export default UserContext;
