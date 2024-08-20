import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import './App.css';

import Auth from './pages/Auth';
import Signup from './components/Signup';

function App() {
  return (
   <Router>
    <Switch>
      <Route path ='/' exact>
        <Auth />
      </Route>
      <Route path ='/signup' exact>    
        <Signup />
      </Route>
      <Redirect to='/' />
    </Switch>
   </Router>
  )
}

export default App;
