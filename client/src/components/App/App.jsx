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
import InputRules from '../InputRules/InputRules';


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
        <Route exact path='/ar'>
          <AR />
        </Route>
        <Route exact path='/rules'>
          <InputRules />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route> 
        <Route exact path="/logout">
          <Logout />
        </Route>
        <Route exact path="/telegram" component={() => {
          window.location.href = 'https://t.me/make_russia_great_again'; 
          return null;
        }} />
        <Route exact path="/you_tube" component={() => {
          window.location.href = 'https://www.youtube.com/'; 
          return null;
        }} />
        <Route exact path="/instagram" component={() => {
          window.location.href = 'https://www.instagram.com/svoyo.space/'; 
          return null;
        }} />
      </Switch>
    </Router>
  );
}

export default App;
