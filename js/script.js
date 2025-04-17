//get data

function changeName(){
    let name = prompt("Enter your name: ")
    document.getElementById("name").innerHTML = name
}

changeName();

function validateForm() {
  const nama = document.forms["message-form"]["name-input"].value;
  const email = document.forms["message-form"]["email-input"].value;
  const message = document.forms["message-form"]["message-input"].value;

  let isValid = true;

  // Validasi nama
  if (nama === '') {
      document.getElementById("error-name").innerHTML = "Please enter your name";
      isValid = false;
  } else {
      document.getElementById("error-name").innerHTML = "";
  }

  // Validasi email
  if (email === '') {
      document.getElementById("error-email").innerHTML = "Please enter your email";
      isValid = false;
  } else {
      document.getElementById("error-email").innerHTML = "";
  }

  // Validasi pesan
  if (message === '') {
      document.getElementById("error-message").innerHTML = "Please enter your message";
      isValid = false;
  } else {
      document.getElementById("error-message").innerHTML = "";
  }

  if (!isValid) {
      return false;
  }

  // Tampilkan hasil input ke bagian output
  document.getElementById("name-output").innerHTML = nama;
  document.getElementById("email-output").innerHTML = email;
  document.getElementById("message-output").innerHTML = message;

  return false; 
}

//banner slideshow

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("img-slideshow");
  if (n > x.length) slideIndex = 1;
  else if (n < 1) slideIndex = x.length;

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex-1].style.display = "block";
}

setInterval(function() {
  plusDivs(1);
}, 300000);
