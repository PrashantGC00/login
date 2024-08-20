import React from "react";
import { Link } from 'react-router-dom'

import Login from "../components/Login";

const Auth = () =>{
    return (
        <div className='login-container__main'>
        <div className='login-container'>
          <Login />
          <div className='container__options'>
            <button>
              <Link to='/'>Login</Link>
            </button>
            <button>
                <Link to='/signup'>
                    signup
                </Link>
            </button>
          </div>
        </div>
      </div>
    )
}

export default Auth