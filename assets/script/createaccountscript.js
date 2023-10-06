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
let users = JSON.parse(localStorage.getItem("userRaw")) || new Array();
// localStorage.setItem("userRaw", JSON.stringify(users));
let regUsers = JSON.parse(localStorage.getItem("userRaw"));
var usersCounter = () => {
  return users.length + 1;
};

// Variable to determine an existing user
var test;

// conditions for the email detail inputs
if (email) {
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
}

//condition for password strength
if (passWord) {
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
}

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
        test = true;
      } else if (
        existingUsers.Username == userDetails.Username &&
        existingUsers.Email !== userDetails.Email
      ) {
        console.log("this username has been taken");
        test = true;
      } else if (
        existingUsers.Username !== userDetails.Username &&
        existingUsers.Email == userDetails.Email
      ) {
        console.log("this Email is already registered");
        test = true;
      } else if (existingUsers.storename == userDetails.Storename) {
        console.log("this store has been taken");
        test = true;
      } else {
        console.log("valid user!");
        test = false;
      }
    }
  } else {
    console.log("valid user!");
    test = false;
  }
  console.log(test);
}

// create button function
if (createButton) {
  createButton.addEventListener("click", () => {
    var userDetails = {
      id: usersCounter(),
      Fullname: fullName.value,
      Username: userName.value,
      Storename: storeName.value,
      Email: email.value,
      PassWord: passWord.value,
      Confirmpassword: confirmPassword.value,
    };
    myFunction(userDetails);
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
    } else if (test == true) {
      alert("already");
    } else {
      users.push(userDetails);
      localStorage.setItem("userRaw", JSON.stringify(users));
      regUsers = JSON.parse(localStorage.getItem("userRaw"));
      console.log(regUsers);
      alert("ACOUNT CREATED!");
        fullName.value = "" 
        userName.value = "" 
        storeName.value = "" 
        email.value = "" 
        passWord.value = "" 
        confirmPassword.value = ""
        passWordStrent.innerHTML = ""
    }
  });
}

console.log(regUsers);
console.log(users);

// Login code from here down
const incomingUserName = document.getElementById("user-coming");
const incomingPassword = document.getElementById("pass-word-coming");
const loginButton = document.getElementById("login-btn");

//Guest Login
const guestLoginBtn = document.getElementById("guest");

//Guest button action
if (guestLoginBtn) {
  guestLoginBtn.addEventListener("click", () => {
    window.location.href = portalTo;
    onlineGuest();
  });
}

//Guest object function(this replaces the user in local storage and overwrites with guest Obj)
function onlineGuest() {
  removeUser();
  var userGuest = { Username: "Guest" };
  localStorage.setItem("guestObj", JSON.stringify(userGuest));
  return userGuest;
}

// Logged in User
var loggedInUser = null;

// link to userPage
var portalTo = "accountUser.html";

// Function to assign a matching user login to an existing user in localstorage
function useLoggedInUser(use) {
  if (use) {
    // console.log("userFound:", use);
    localStorage.setItem("onlineUser", JSON.stringify(use));
    console.log(use);
  } else {
    console.log("user not found");
    alert("USER NOT FOUND");
  }
}

//Function to remove user when Guest logs in
function removeUser() {
  localStorage.removeItem("onlineUser");
}

//Condition for Login
if (incomingUserName && incomingPassword) {
  loginButton.addEventListener("click", () => {
    //Function to select which user is trying to login and extract that particular user object
    if (regUsers) {
      loggedInUser = regUsers.find(
        (each) =>
          each.Username == incomingUserName.value &&
          each.PassWord == incomingPassword.value
      );
      var incorrectPassword = regUsers.find(
        (each) =>
          each.Username == incomingUserName.value &&
          each.PassWord != incomingPassword.value
      );
      if (loggedInUser) {
        useLoggedInUser(loggedInUser);
        alert("LOGIN SUCCESSFULL");
        window.location.href = portalTo;
      } else if (incorrectPassword) {
        alert(
          `USER FOUND: ${incorrectPassword.Username} BUT INCORRECT PASSWORD`
        );
      } else if (incomingUserName.value == "" || incomingPassword.value == "") {
        alert("PLEASE FILL ALL FIELDS");
      } else {
        console.log("user not found");
        alert("USER NOT FOUND");
      }
    } else {
      if (incomingUserName.value == "" || incomingPassword.value == "") {
        alert("PLEASE FILL ALL FIELDS");
      } else {
        alert("USER NOT FOUND");
      }
    }
  });
}

export { useLoggedInUser };
export { onlineGuest };
