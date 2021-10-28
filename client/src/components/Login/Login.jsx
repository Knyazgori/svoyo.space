import * as React from 'react';
import { Container, TextField, Box, Button } from '@mui/material';

import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";
import { checkAdminAC } from '../../redux/actionCreators/adminAC';

const Login = () => {
  const dispatch = useDispatch() 
  let history = useHistory();

  const onSubmit = (event) => {
    event.preventDefault();

    const data = new FormData(event.currentTarget);
    const body = {
      email: data.get('email'),
      password: data.get('password'),
    };

    fetch('http://localhost:5000/signin', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        dispatch(checkAdminAC({ payload: data.userSignedIn }));
        history.push('/');
      })
  }

  return (
    <Container component="main" maxWidth="xs">
      <Box sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
            <h3>Вход</h3>
          <Box component="form" onSubmit={onSubmit} noValidate sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Почта"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="password"
            label="Пароль"
            name="password"
            type="password"
            autoFocus
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Войти
          </Button>
        </Box>
      </Box>
    </Container>
  )
}
export default Login;
