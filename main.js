document.getElementById('myform').addEventListener('submit', function(e) {
  e.preventDefault();

  var el = document.getElementById('myform');

  var username = el.username.value;
  var email = el.email.value;
  var number = el.number.value;
  var text = el.text.value;
  var password = el.password.value;

  var error = '';
  if(username.length < 2)
    error = "Ім\'я менше 2 символів";

  else if(!email.includes('@'))
    error = "Email не має @"

  else if(!number.includes('+38'))
    error = "Телефон має починатися з +38"

  else if(!number.includes('+38'))
    error = "Телефон має починатися з +38"

  else if(text.length < 10)
    error = "Текст має бути більше 10 символів"

  else if(password.length < 8)
    error = "Пароль має бути більше 8 символів"

  else if(password.length > 16)
    error = "Текст має не більше 16 символів"

  else if(!password.includes ("$"), ("#"), ("&"), ("+"), ("-"), ("<"), (">"), (","), ("_"), ("*"))
    error = "Пароль повинен мати хоча б один спецсимвол"  

  // document.getElementById('error').innerText = '';
  // window.location = 'https://itproger.com'

  if(error != '') {
    document.getElementById('error').innerText = error
    return false
  }
  return false
});

function checkForm(el) {

}

  // const specialChars = /[$#&+\-<>,_*]/;
  // const upperCase = /[A-Z]/;

  // if (!specialChars.test(password)) {
  //     console.log("Пароль повинен мати хоча б один спецсимвол"); 
  //     return false
  // }

  // if (!upperCase.test(password)) {
  //     console.log("Пароль повинен мати хоча б одну велику літеру");
  //     return false
  // }