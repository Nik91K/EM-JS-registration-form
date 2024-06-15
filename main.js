document.getElementById('myform').addEventListener('submit', function(e) {
  e.preventDefault();
  // 
  var el = document.getElementById('myform');
  var firstname = el.firstname.value;
  var lastname = el.lastname.value;
  var email = el.email.value;
  var text = el.text.value;
  var password = el.password.value;
  var number = el.number.value;
  // перевірка
  var error = '';
  if (firstname.length < 2) {
    error = 'Ім\'я занадто мале';
  } else if (lastname.length < 2) {
    error = 'Прізвище занадто мале';
  } else if (email.length < 2) {
    error = 'Email занадто малий';
  } else if (!email.includes('@')) {
    error = 'Email не має @';
  } else if (text.length < 2) {
    error = 'Short description занадто мале';
  } else if (password.length < 8) {
    error = 'Пароль занадто малий';
  } else if (password.length > 16) {
    error = 'Пароль занадто великий';
  } else if (!/[A-Z]/.test(password)) {
    error = 'Пароль має містити хоча б одну велику літеру';
  } else if (!/[a-z]/.test(password)) {
    error = 'Пароль має містити хоча б одну маленьку літеру';
  } else if (!/[0-9]/.test(password)) {
    error = 'Пароль має містити хоча б одне число';
  } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    error = 'Пароль має містити хоча б один спецсимвол';
  } else if (!/^\+38\d{3}\d{7}$/.test(number)) {
    error = 'Номер телефону має бути у форматі +38XXXYYYYYYY';
  } else if (number. length < 8) {
    error = "Номер телефону занадто малий"
  }

  if (error != '') {
    document.getElementById('error').innerText = error;
    return false;
  }
  // створення файлу
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
  // перенесення на нову сторінку
  document.getElementById('error').innerText = '';
  window.location = 'after_registration.html';

  document.getElementById('error').innerText = '';
  return false;
});
