const passwordForm = document.getElementById('password-form');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit');
const protectedContent = document.getElementById('protected-content');

const correctPassword = '@desa888duri'; // Set your password here

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  const enteredPassword = passwordInput.value.trim();
  if (enteredPassword === correctPassword) {
    protectedContent.style.display = 'block';
    passwordForm.style.display = 'none';
  } else {
    alert('Incorrect password!');
  }
})

