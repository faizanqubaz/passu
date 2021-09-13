import axios from "axios";
const API_URL = "http://localhost:2000/v1/auth/";

const register = (firstName, lastName, email, password) => {
  return axios.post(API_URL + "register", {
    firstName,
    lastName,
    email,
    password,
  },{
    headers:{
      'Content-Type':'application/json'
    }
  });
};

const login = (email, password) => {
  return axios.post(API_URL + "/login", {
    email,
    password,
  });
};

export default {
  register,
  login,
};
