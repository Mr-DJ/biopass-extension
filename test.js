
console.log('Started');

let inputs = document.getElementsByTagName("input");
let len = inputs.length;

if (len == 0) {
  console.log("there is no form");
}
console.log("there might be a form");


function getLoginFields() {

    let pass = "", user = "";

    while (len--) {
        if (inputs[len].type === "password") {
            pass = inputs[len].value;
            user = (len > 0 && (inputs[len - 1].type === "text"  || inputs[len - 1].type === "email")) ? inputs[len - 1].value : user;
        }
    }

    if(user.length == 0 || pass.length == 0) {
        console.log('ure empty')
        // AHUYY??
    } else {
        console.log("password -> " + pass);
        console.log("user -> " + user);
    }
}

let submitButton = document.querySelectorAll("input[type=submit]")[0]
  ? document.querySelectorAll("input[type=submit]")[0]
  : document.querySelectorAll("button[type=submit]")[0];


submitButton.addEventListener('click', function() { 
    console.log("clicked"); getLoginFields();
    document.getElementsByClassName('shrivardan')[0].style.display = "block";
});

// console.log("Started");

// let inputs = document.getElementsByTagName("input");
// let len = inputs.length;

// if (len == 0) {
//   console.log("there is no form");
// }
// console.log("there might be a form");

// function getLoginFields() {
//   let pass = "",
//     user = "";

//   while (len--) {
//     if (inputs[len].type === "password") {
//       pass = inputs[len].value;
//       user =
//         len > 0 &&
//         (inputs[len - 1].type === "text" || inputs[len - 1].type === "email")
//           ? inputs[len - 1].value
//           : user;
//     }
//   }

//   if (user.length == 0 || pass.length == 0) {
//     console.log("ure empty");
//   } else {
//     console.log("password -> " + pass);
//     console.log("user -> " + user);
//     document.getElementById("username").innerHTML = user;
//     document.getElementById("password").innerHTML = pass;
//   }
// }

// let submitButton =
//   document.querySelectorAll("input[type=submit]")[0] ||
//   document.querySelectorAll("button[type=submit]")[0];

// submitButton.addEventListener("click", function() {
//   console.log("clicked");
//   getLoginFields();
// });