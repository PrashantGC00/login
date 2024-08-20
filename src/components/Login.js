import React from "react";

import Auth from "./Auth";
import AuthContainer from "../pages/AuthContainer";

const Login = () =>{
    return (
        <React.Fragment>
            <AuthContainer title="Log In">
                <Auth>
                    <h4>User Name</h4>
                    <input type="Text"></input>
                    <h4>Password</h4>
                    <input type="password"></input>
                </Auth>
            </AuthContainer>
        </React.Fragment>
    )
}

export default Login