import React, { useState } from 'react';

import { NavLink } from 'react-router-dom'



const LoginContants = () => {
    const [logins, setLogin] = useState([
        {
            placeholder: "email",

        },
        {
            placeholder: "password",

        }
    ])
    return (
        <div className="main_login">
            <div className="login_main">
                <div className="login_head">
                    <h2 className="login_heading">Login</h2>
                    <p className="signup_divider"></p>
                </div>
                <div className="signup_main_inp">
                    {
                        logins.map((login) => (

                            <input className="login_input" placeholder={login.placeholder} />
                        ))
                    }
                </div>
                <div className="login_button">
                    <NavLink to='/dashboard'>
                        <button className="login_btn">Login</button>
                    </NavLink>

                </div>

            </div>
        </div>

    )
}



export default LoginContants;