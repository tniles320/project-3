import Axios from "axios";

// Export an object containing methods we'll use for accessing the GitHub Jobs API

export default {
  getUser: function () {
    return Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/user",
    });
  },

  getPosts: function () {
    return Axios({
      method: "GET",
      url: "http://localhost:3001/dashboard",
    });
  },

  getSinglePost: function (id) {
    return Axios({
      method: "GET",
      params: {
        id: id,
      },
      url: `http://localhost:3001/post/${id}`,
    });
  },

  // register user call
  register: function (username, password, email, zipCode) {
    return Axios({
      method: "POST",
      data: {
        username: username,
        password: password,
        email: email,
        zipCode: zipCode,
      },
      withCredentials: true,
      url: "http://localhost:3001/register",
    });
  },

  // login function
  login: function (username, password) {
    return Axios({
      method: "POST",
      data: {
        username: username,
        password: password,
      },
      withCredentials: true,
      url: "http://localhost:3001/login",
    });
  },

  // logout function
  logout: function () {
    return Axios({
      method: "GET",
      url: "http://localhost:3001/logout",
    });
  },

  //posts user post with data
  submitPost: function (title, amount, description, location) {
    return Axios({
      method: "POST",
      withCredentials: true,
      data: {
        title: title,
        description: description,
        amount: amount,
        location: location,
      },
      url: "http://localhost:3001/post",
    });
  },

  // get all of a user's posts
  findUserPosts: function () {
    return Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/post",
    });
  },
};
