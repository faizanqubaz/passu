import React, { useState } from "react";
import authService from "../../services/auth.service";
import { Link, NavLink } from "react-router-dom";

const SignupContents = () => {
  const [users, setUsers] = useState([]);
  const [inputFiled, setInputField] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confrm_password: "",
  });
  const [Input, setInput] = useState([
    {
      placeholder: "firstName",
      name: "firstName",
    },
    {
      placeholder: "lastName",
      name: "lastName",
    },
    {
      placeholder: "email",
      name: "email",
    },
    {
      placeholder: "password",
      name: "password",
    },
    {
      placeholder: "confrm_password",
      name: "confrm_password",
    },
  ]);

  const handleInputValue = (e) => {
    
    setInputField({
      ...inputFiled,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmitbutton = () => {
    setUsers({ ...users, inputFiled });
    console.log({ inputFiled, users });
    // authService.register();
  };

  return (
    <>
      <div className="main">
        <div className="signup_slider">
          <div className="signup_head">
            <h2 className="signup_heading">Register</h2>
            <p className="signup_divider"></p>
          </div>
          <div className="signup_main_inp">
            {Input.map((inp) => (
              <input
                className="signup_inp"
                name={inp.name}
                onChange={handleInputValue}
                placeholder={inp.placeholder}
              />
            ))}
          </div>
          <div className="signup_button">
            <NavLink to="login">
              <button className="signup_btn" onClick={handleSubmitbutton}>
                Register
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignupContents;
