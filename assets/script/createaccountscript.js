// create account button
const createButton = document.getElementById("create");

// create account user details
var fullName = document.getElementById("full-name");
var userName = document.getElementById("user-name");
var storeName = document.getElementById("store");
var email = document.getElementById("e-mail");
var passWord = document.getElementById("pass-word");
var confirmPassword = document.getElementById("confirm-pass");
var passWordStrent = document.getElementById("pass-strent");

// user details array of objects
let users = [];
// localStorage.setItem("userRaw", JSON.stringify(users));
let regUsers = JSON.parse(localStorage.getItem("userRaw"));
let usersCounter = 1;

// conditions for the email detail inputs
email.addEventListener("change", () => {
  if (!email.value.includes("@" && ".com")) {
    email.setAttribute("title", "please write your email correctly");
    email.style.borderColor = "red";
    email.style.backgroundColor = "rgba(255,200,61,0.2)";
  } else {
    email.removeAttribute("title");
    email.style.borderColor = "initial";
    email.style.backgroundColor = "initial";
  }
});

//condition for password strength
passWord.addEventListener("keyup", () => {
  function hasUppercaseAndLowercase(here) {
    return /[A-Z]/.test(here) && /[a-z]/.test(here);
  }
  function containsNumbers(here) {
    return /\d/.test(here);
  }
  function containsSpecialCharacters(here) {
    var pattern = /[!@#$%^&*()_+\-=\[\]{}|\\:;'"<>.,/?]/;
    return pattern.test(here);
  }

  if (
    (passWord.value.length < 8 && passWord.value.length != "") ||
    (hasUppercaseAndLowercase(passWord.value) == false &&
      passWord.value.length != "") ||
    (containsNumbers(passWord.value) == false && passWord.value.length != "")
  ) {
    passWordStrent.classList.remove("moderate");
    passWordStrent.classList.remove("strong");
    passWordStrent.innerText = "weak";
    passWordStrent.classList.add("weak");
  } else if (
    passWord.value.length >= 8 &&
    passWord.value.length != "" &&
    hasUppercaseAndLowercase(passWord.value) == true &&
    passWord.value.length != "" &&
    containsNumbers(passWord.value) == true &&
    passWord.value.length != "" &&
    containsSpecialCharacters(passWord.value) == false &&
    passWord.value.length != ""
  ) {
    passWordStrent.classList.remove("weak");
    passWordStrent.classList.remove("strong");
    passWordStrent.innerText = "moderate";
    passWordStrent.classList.add("moderate");
  } else if (
    passWord.value.length >= 8 &&
    passWord.value.length != "" &&
    hasUppercaseAndLowercase(passWord.value) == true &&
    passWord.value.length != "" &&
    containsNumbers(passWord.value) == true &&
    passWord.value.length != "" &&
    containsSpecialCharacters(passWord.value) == true &&
    passWord.value.length != ""
  ) {
    passWordStrent.classList.remove("weak");
    passWordStrent.classList.remove("moderate");
    passWordStrent.innerText = "strong";
    passWordStrent.classList.add("strong");
  } else if (passWord.value == "") {
    passWordStrent.innerText = "";
  } else {
  }
});

// to loop through and get each already existing userDetails within the user
function myFunction(userDetails) {
if (regUsers != null) {
  for (let i = 0; i < regUsers.length; i++) {
    var existingUsers = regUsers[i];
    console.log(existingUsers);

    if (
      existingUsers.Username == userDetails.Username &&
      existingUsers.Email == userDetails.Email
    ) {
      console.log("this user exists");
    } else if (
      existingUsers.Username == userDetails.Username &&
      existingUsers.Email !== userDetails.Email
    ) {
      console.log("this username has been taken");
    } else if (
      existingUsers.Username !== userDetails.Username &&
      existingUsers.Email == userDetails.Email
    ) {
      console.log("this Email is already registered");
    } else if (existingUsers.storename == userDetails.Storename) {
      console.log("this store has been taken");
    } else {
      console.log("valid user!");
    }
  }
}
}



// create button function
createButton.addEventListener("click", () => {
  var userDetails = {
    id: usersCounter,
    Fullname: fullName.value,
    Username: userName.value,
    Storename: storeName.value,
    Email: email.value,
    PassWord: passWord.value,
    Confirmpassword: confirmPassword.value,
  };

  if (
    userDetails.Fullname == "" ||
    userDetails.Username == "" ||
    userDetails.Storename == "" ||
    userDetails.Email == "" ||
    userDetails.PassWord == "" ||
    userDetails.Confirmpassword == ""
  ) {
    alert("PLEASE FILL ALL DETAILS!");
  } else if (!userDetails.Email.includes("@", ".com")) {
    alert("PLEASE WRITE YOUR EMAIL PROPERLY");
  } else if (
    email.style.borderColor == "red" ||
    email.style.backgroundColor == "rgba(255,200,61,0.2)"
  ) {
    alert("FILL EMAIL PROPERLY");
  } else if (userDetails.Confirmpassword != userDetails.PassWord) {
    alert("CROSSCHECK PASSWORD AND CONFIRM!");
  } else if (passWordStrent.innerText == "weak") {
    alert("PASSWORD TOO WEAK");
  } else if (myFunction(userDetails)) {
    alert("already");
  } else {
    usersCounter++;
    users.push(userDetails);
    if (
      !(
        userDetails.Fullname == "" ||
        userDetails.Username == "" ||
        userDetails.Storename == "" ||
        userDetails.Email == "" ||
        userDetails.PassWord == "" ||
        userDetails.Confirmpassword == ""
      )
    ) {
      alert("ACOUNT CREATED!");
    } else {
    }
    localStorage.setItem("userRaw", JSON.stringify(users));
    regUsers = JSON.parse(localStorage.getItem("userRaw"));
    console.log(regUsers);
    
  }
});
console.log(regUsers);

// this code is not complete you need to find a way to prevent appending any useradetail object that any existing one does not validate
