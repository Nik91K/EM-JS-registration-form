document.getElementById('myform').addEventListener('submit', function(e) {
  e.preventDefault();
  // 
  var el = document.getElementById('myform');
  var firstname = el.firstname.value.trim();
  var lastname = el.lastname.value.trim();
  var email = el.email.value.trim();
  var text = el.text.value.trim();
  var password = el.password.value.trim();
  var number = el.number.value.trim();
  // check
  var error = '';
  if (firstname.length < 2) {
    error = 'The name is too small';
  } else if (lastname.length < 2) {
    error = 'The last name is too small';
  } else if (email.length < 2) {
    error = 'Email is too small';
  } else if (!email.includes('@')) {
    error = 'Email does not have @';
  } else if (text.length < 2) {
    error = 'Short description is too short';
  } else if (password.length < 8) {
    error = 'The password is too small';
  } else if (password.length > 16) {
    error = 'The password is too long';
  } else if (!/[A-Z]/.test(password)) {
    error = 'The password must contain at least one capital letter';
  } else if (!/[a-z]/.test(password)) {
    error = 'The password must contain at least one lowercase letter';
  } else if (!/[0-9]/.test(password)) {
    error = 'Password must contain at least one number';
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    error = 'Пароль має містити хоча б один спецсимвол';
  } else if (!/^\+38\d{3}\d{7}$/.test(number)) {
    error = 'The phone number must be in the format +38XXXYYYYYYY';
  } else if (number. length < 8) {
    error = "The phone number is too small"
  }

  if (error != '') {
    document.getElementById('error').innerText = error;
    return false;
  }
  // creating a file
  var userData = {
    firstname: firstname,
    lastname: lastname,
    email: email,
    text: text,
    password: password,
    number: number
  };

  var fileData = new Blob([JSON.stringify(userData, null, 2)], { type: 'test/json' });

  var link = document.createElement('a');
  link.href = URL.createObjectURL(fileData);
  link.download = 'userData.json';

  document.body.appendChild(link);
  link.click();
  link.parentNode.removeChild(link);
  // moving to a new page
  document.getElementById('error').innerText = '';
  window.location = 'after_registration.html';
  //
  document.getElementById('error').innerText = '';
  return false;
});
