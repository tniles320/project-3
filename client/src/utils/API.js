import Axios from "axios";
import axios from "axios";
// Export an object containing methods we'll use for accessing the GitHub Jobs API

export default {
  getUser: function () {
    return Axios({
      method: "GET",
      withCredentials: true,
      url: "/api/user",
    });
  },

  editUser: function (_id, username, email, zipCode) {
    return Axios({
      method: "PUT",
      withCredentials: true,
      data: {
        _id: _id,
        username: username,
        email: email,
        zipCode: zipCode,
      },
      url: "/api/account",
    });
  },

  getPosts: function () {
    return Axios({
      method: "GET",
      url: "/api/dashboard",
    });
  },

  getSinglePost: function (id) {
    return Axios({
      method: "GET",
      params: {
        id: id,
      },
      url: `/api/post/${id}`,
    });
  },

  updatePost: function (
    id,
    title,
    description,
    location,
    amount,
    worktype,
    contact
  ) {
    return Axios({
      method: "PUT",
      params: {
        id: id,
      },
      data: {
        title: title,
        description: description,
        location: location,
        amount: amount,
        worktype: worktype,
        contact: contact,
      },
      url: `/api/post/${id}`,
    });
  },

  deletePost: function (id) {
    return Axios({
      method: "DELETE",
      params: {
        id: id,
      },
      url: `/api/post/${id}`,
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
      url: "/api/register",
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
      url: "/api/login",
    });
  },

  // logout function
  logout: function () {
    return Axios({
      method: "GET",
      url: "/api/logout",
    });
  },

  //posts user post with data
  submitPost: function (
    title,
    amount,
    description,
    location,
    worktype,
    worktypeinquiry,
    upload,
    contact
  ) {
    return Axios({
      method: "POST",
      withCredentials: true,
      data: {
        title: title,
        description: description,
        amount: amount,
        location: location,
        worktype: worktype,
        worktypeinquiry: worktypeinquiry,
        upload: upload,
        contact: contact,
      },
      url: "/api/post",
    });
  },

  // get all of a user's posts
  findUserPosts: function () {
    return Axios({
      method: "GET",
      withCredentials: true,
      url: "/api/post",
    });
  },
  uploadImage: function (formData) {
    return axios.post("/api/upload", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  },

  getImage: function (file) {
    return axios.get(`/upload/${file}`);
  },
};
