import React from "react";

function Login() {
  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const login = () => {
    Axios({
      method: "POST",
      data: {
        username: loginUsername,
        password: loginPassword,
      },
      withCredentials: true,
      url: "http://localhost:4000/login",
    }).then((res) => console.log(res));
  };

  const getUser = () => {
    Axios({
      method: "GET",
      withCredentials: true,
      url: "http://localhost:4000/user",
    }).then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  };
}

export default Login;
