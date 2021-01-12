import Axios from "axios";
import axios from "axios";

// Export an object containing methods we'll use for accessing the GitHub Jobs API

export default {
  getUser: function () {
    return Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:3001/user",
    });
  },
  logout: function () {
    return axios.get("/logout");
  },
};
