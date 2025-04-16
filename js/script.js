function changeName(){
    let name = prompt("Enter your name: ")
    document.getElementById("name").innerHTML = name
}

changeName();

function validateForm() {
    const nama = document.forms["message-form"]["name-input"].value
    const angka = 11
    if (nama == '') {
        document.getElementById("error-name").innerHTML = "Please enter your name"

        return false
    }

    //document.getElementById("name").innerHTML = nama
    //document.getElementById("error-name").innerHTML = ""

    setName(nama);

    return false
}

function setName(nama) {
    document.getElementById("name").innerHTML = nama
    document.getElementById("error-name").innerHTML = ""
}

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

  console.log("Current slide index: " + slideIndex); // Debugging line
}

setInterval(function() {
  plusDivs(1);
}, 1000); // Change image every 3 seconds
