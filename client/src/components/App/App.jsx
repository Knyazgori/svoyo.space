import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

import { useEffect } from 'react';

import { checkAdminAC } from '../../redux/actionCreators/adminAC';

import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import TetrisNav from '../TetrisNav/TetrisNav';


function App() {

  const dispatch = useDispatch()
  const admin = useSelector(state => state.isUserAuth)
  
  useEffect(() => {
    console.log(admin);
    fetch('http://localhost:5000/isauth', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(data => {
        if (data.isUserAuth) {
          dispatch(checkAdminAC(data.isUserAuth))
        }
      })
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <TetrisNav />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route> 
        <Route exact path="/logout">
          <Logout />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
