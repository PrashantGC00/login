import React from "react";

import './Auth.css'

const Auth = props => {
    return(
        <form className="login-container__form">
            {props.children}
        </form>
    )
}

export default Auth