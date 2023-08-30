// create account button
const createButton = document.getElementById("create");

// create account user details
var fullName = document.getElementById("full-name");
var userName = document.getElementById("user-name");
var storeName = document.getElementById("store");
var email = document.getElementById("e-mail");
var passWord = document.getElementById("pass-word");
var confirmPassword = document.getElementById("confirm-pass");

// user details array of objects
const users = [];
let usersCounter = 1;

// conditions for the detail inputs
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

// to loop through and get each already existing userDetails within the user
function myFunction(userDetails) {
  for (let i = 0; i < users.length; i++) {
    var existingUsers = users[i];
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
  } else {
    if (myFunction(userDetails)) {
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
      console.log(users);
      // localStorage.setItem("Users", users);

      // let registeredUsers = localStorage.getItem("Users");

      // console.log(registeredUsers);

      // localStorage.clear();
    }
  }
});

// this code is not complete

// var example = "exxx";

// export {example};

//function to check if an object already exists in the array
// function isDuplicateuserDetails(userDetails) {
//   for (let i = 0 ; i < users.length ; i++) {
//     let existinguserDetails = users[i];

//     // compare properties of existing userDetails with new userDetails
//     let isDuplicate = true;
//     for (const prop in userDetails) {
//       if (userDetails.hasOwnProperty(prop) && existinguserDetails.hasOwnProperty(prop)) {
//         if (userDetails[prop] !== existinguserDetails[prop]) {
//           isDuplicate = false;
//         }
//       }
//     }
//     if(isDuplicate) {
//       return true;
//     }
//   }
//   return false;
// }

//   //compare properties of new userDeatils with existing userDetails
//   // var alreadyExistingUser = true;
//   // var alreadyExistingUsername = true;
//   // var alreadyExistingUserEmail = true;
//   // var alreadyExistingStorename = true;
//   const enableCheck1 = existingUsers.id;
//   const enableCheck2 = userDetails.id;
//   const existingUsersCheck1 = existingUsers.Username;
//   const existingUsersCheck2 = existingUsers.Email;
//   const existingUsersCheck3 = existingUsers.Storename;
//   const userDetailscheck1 = userDetails.Username;
//   const userDetailscheck2 = userDetails.Email;
//   const userDetailscheck3 = userDetails.Storename;

//   if (enableCheck1 == enableCheck2) {
//     return false;
//   }
//   else {
//     if (
//       (userDetailscheck1 == existingUsersCheck1) &&
//       (userDetailscheck2 == existingUsersCheck2)
//     ) {
//       console.log("user already exists");
//       return true;
//     } else if (
//       (userDetailscheck1 !== existingUsersCheck1) &&
//       (userDetailscheck2 == existingUsersCheck2)
//     ) {
//       console.log("this email is already registered to an account");
//       return true;
//     } else if (
//       (userDetailscheck1 == existingUsersCheck1) &&
//       (userDetailscheck2 !== existingUsersCheck2)
//     ) {
//       console.log("this username is not available");
//       return true;
//     } else if (userDetailscheck3 == existingUsersCheck3) {
//       console.log("this store has already been taken");
//       return true;
//     } else {
//       console.log("new user is valid");
//       return false;
//     }
//   }
// }
