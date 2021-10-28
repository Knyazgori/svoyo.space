import React from 'react'
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { checkAdminAC } from '../../redux/actionCreators/adminAC';



const Logout = () => {

  const dispatch = useDispatch()
  let history = useHistory();

  fetch('http://localhost:5000/logout', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
    })
      .then(res => res.json())
      .then(data => {
        dispatch(checkAdminAC({ payload: data.isUserAuth}));
        history.push("/");
      })
  return (
    <>
    </>
  )
}

export default Logout
