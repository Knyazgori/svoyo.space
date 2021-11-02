import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';

import { useEffect } from 'react';

import { checkAdminAC } from '../../redux/actionCreators/adminAC';

import Login from '../Login/Login';
import Logout from '../Logout/Logout';
import Tetris from '../Tetris/Tetris';
import Home from '../Home/Home';
import About from '../About/About';
import Letter from '../Letter/Letter';
import Passport from '../Passport/Passport';
import AR from '../AR/AR';


function App() {

  const dispatch = useDispatch()
  const admin = useSelector(state => state.isUserAuth)
  
  useEffect(() => {
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
          <Tetris />
        </Route>
        <Route exact path='/home'>
          <Home />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/russia'>
          <Letter />
        </Route>
        <Route exact path='/passport'>
          <Passport />
        </Route>
        <Route exact path='/AR'>
          <AR />
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
