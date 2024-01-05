const loginFormHandler = async (event) => {
  event.preventDefault();


  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();
  console.log("loginFormHandler email = " + email);
  console.log("loginFormHandler password = " + password);

  if (email && password) {
    console.log("loginFormHandlerif (email && password) {"); 
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      console.log("loginFormHandler response.ok ");
      document.location.replace('/api/dashboard');
      
    } else {
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/api/dashboard');
    } else {
      alert(response.statusText);
    }
  }
};
function toggleForm() {
  // Get the div containers
  var loginFormContainer = document.getElementById('login-form-container');
  var signupFormContainer = document.getElementById('signup-form-container');
  console.log("toggleForm() loginFormContainer.style.display = "+ loginFormContainer.style.display);
  // Check the current display state
  if (loginFormContainer === 'none' || loginFormContainer.style.display === 'none' || loginFormContainer.style.display === '') {
    // Login form is hidden, show it
    console.log("show it");
    loginFormContainer.style.display = 'block';
    // Signup form is visible, hide it
    signupFormContainer.style.display = 'none';
  } else {
    // Login form is visible, hide it
    console.log("hide it");
    loginFormContainer.style.display = 'none';
    // Signup form is hidden, show it
    signupFormContainer.style.display = 'block';
  }
  console.log("toggleForm() loginFormContainer.style.display = "+ loginFormContainer.style.display);
 
}
toggleForm();
document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);

document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
