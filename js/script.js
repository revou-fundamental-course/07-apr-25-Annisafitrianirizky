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