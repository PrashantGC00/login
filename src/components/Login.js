import React from "react";

import './Login.css'

const Login = () => {
    return(
        <React.Fragment>
            <h2 className='login-container__title'>Login</h2>
            
            <form className="login-container__form">
                <h4>User Name</h4>
                <input type="Text"></input>
                <h4>Password</h4>
                <input type="password"></input>
            </form>
        </React.Fragment>
    )
}

export default Login