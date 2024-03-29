import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AuthUser() {
  const [token, setToken] = useState(null);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const getToken = () => {
    const tokenString = sessionStorage.getItem("token");
    const userToken = JSON.parse(tokenString);
    return userToken;
  };

  const getUser = () => {
    const userString = sessionStorage.getItem("user");
    const user_detail = JSON.parse(userString);
    return user_detail;
  };

  const saveToken = (user, token) => {
    sessionStorage.setItem("token", JSON.stringify(token));
    sessionStorage.setItem("user", JSON.stringify(user));

    setToken(token);
    setUser(user);
    navigate("/home");
  };

  const logout = () => {
    sessionStorage.clear();
    navigate("/");
  };

  const http = axios.create({
    baseURL: "http://localhost:5050/api",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  return {
    setToken: saveToken,
    token,
    user,
    getToken,
    http,
    logout,
    getUser,
  };
}
