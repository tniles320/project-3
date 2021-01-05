import React from "react";
import Axios from "axios";

function Register() {
  const [registerUsername, setRegisterUsername] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  Axios({
    method: "POST",
    data: {
      username: registerUsername,
      password: registerPassword,
    },
    withCredentials: true,
    url: "http://localhost:4000/register",
  }).then((res) => console.log(res));
}

export default Register;
