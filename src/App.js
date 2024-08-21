import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './App.css';

import Login from './components/Login';
import SignUp from './components/Signup';

function App() {
  return (
   <Router>
    <Switch>
      <Route path ='/' exact>
        <Login />
      </Route>
      <Route path ='/signup' exact>
        <SignUp />    
      </Route>
      <Redirect to='/' />
    </Switch>
   </Router>
  )
}

export default App;
