import React from "react";

const UserContext = React.createContext({
  _id: "",
  username: "",
  email: "",
  zipCode: "",
  rating: "",
  posts: [],
  loggedIn: false,
});

export default UserContext;
