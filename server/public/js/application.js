// SignIn
const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const {
      action, method, email, password,
    } = event.target;

    const response = await fetch(action, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: email.value,
        password: password.value,
      }),
    });
    const responseJson = await response.json();

    if (responseJson.isInvalidEmail) {
      alert('Неправильный Email!');
      window.location.href = action;
    }

    if (responseJson.isInvalidPassword) {
      alert('Неправильный пароль!');
      window.location.href = action;
    }

    if (responseJson.userSignedIn) {
      window.location.href = '/';
    }
  });
}
