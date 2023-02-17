
console.log('Started');

let inputs = document.getElementsByTagName("input");
let len = inputs.length;

if (len == 0) {
  console.log("there is no form");
}
console.log("there might be a form");

function setCookie(name, value, maxAgeSeconds) {
    var maxAgeSegment = "; max-age=" + maxAgeSeconds;
    document.cookie = encodeURI(name) + "=" + encodeURI(value) + maxAgeSegment;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

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
        document.getElementsByClassName('shriv_inputs')[1].value = pass;
        setCookie('shriv_password', pass, 30);
        console.log("user -> " + user);
        document.getElementsByClassName('shriv_inputs')[0].value = user;
        setCookie('shriv_username', user, 30);
        setCookie("shriv_display", "block", 30);
    }
}

function embedStatus() {
    if(getCookie('shriv_display') == "block") {
        document.getElementsByClassName("shrivardan")[0].style.display = "block";
        document.getElementsByClassName("shriv_inputs")[0].value =
          getCookie("shriv_username");
        document.getElementsByClassName("shriv_inputs")[1].value =
          getCookie("shriv_password");
    } 
    else
        document.getElementsByClassName("shrivardan")[0].style.display = "none";
}

let submitButton = document.querySelectorAll("input[type=submit]")[0]
  ? document.querySelectorAll("input[type=submit]")[0]
  : document.querySelectorAll("button[type=submit]")[0];


submitButton.addEventListener('click', function() { 
    console.log("clicked"); 
    getLoginFields();
    embedStatus();
});

window.onload = (event) => {
    embedStatus();
};


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