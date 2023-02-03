// document.body.style.border = "10px solid red";
console.log('Started');

let inputs = document.getElementsByTagName("input");
let len = inputs.length;

if (len == 0) {
  console.log("tjere is no form");
}
console.log("tjere might be form");


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
        console.log("i knue ure password esdh esh this only -> " + pass);
        console.log("i knue ure user esdh esh this only -> " + user);
    }
}

let submitButton = document.querySelectorAll("input[type=submit]")[0]
  ? document.querySelectorAll("input[type=submit]")[0]
  : document.querySelectorAll("button[type=submit]")[0];

// if (submitButton.click()) 
//     console.log(" you touched me owo");

submitButton.addEventListener('click', function(){ console.log("you touched me owo"); getLoginFields(); });
