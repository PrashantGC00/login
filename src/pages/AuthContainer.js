import React from "react";
import { Link } from 'react-router-dom'

import './AuthContainer.css'

import Title from "../components/Title";
import Login from "../components/Login"
import SignUp from "../components/Signup";

const AuthContainer = props =>{
    return (
        <div className='login-container__main'>
        <div className='login-container'>
          <Title title={props.title} style='center' />
            {props.children}
          <div className='container__options'>
              <Link to='/'>
                <button>Login</button>
              </Link>
                <Link to='/signup'>
                    <button>
                      Sign Up
                    </button>
                </Link>
          </div>
        </div>
      </div>
    )
}

export default AuthContainer