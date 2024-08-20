import React from "react";

import AuthContainer from "../pages/AuthContainer";
import Auth from "./Auth";

const SignUp = () =>{
    return (
        <React.Fragment>
            <AuthContainer title="Sign Up">
                <Auth>
                    <h4>User Name</h4>
                    <input type="Text"></input>
                    <h4>Email</h4>
                    <input type="Text"></input>
                    <h4>Password</h4>
                    <input type="password"></input>
                </Auth>
            </AuthContainer>
        </React.Fragment>
    )
}

export default SignUp