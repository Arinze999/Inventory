alert("DEMO USERNAME = JOHN , PASSWORD = 0000");

const userName = document.getElementById("user");
const passWord = document.getElementById("pass-word");
const loginButton = document.getElementById("login-btn");

const allowedUser = "john";
const allowedPassword = "0000";
var portalTo = "accountUser.html";

loginButton.addEventListener("click" , () => {
    if (userName.value.toLowerCase() === allowedUser.toLowerCase() && passWord.value === allowedPassword) {
        window.location.href = portalTo;
    }
    else {
        alert("DEMO USERNAME = JOHN , PASSWORD = 0000");
    }
});