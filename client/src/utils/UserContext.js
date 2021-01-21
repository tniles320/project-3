import React from "react";

const UserContext = React.createContext({
  username: "",
  email: "",
  zipCode: "",
  rating: "",
  posts: [],
});

export default UserContext;
