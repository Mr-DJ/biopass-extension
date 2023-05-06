
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
    document.getElementsByClassName("sauban")[0].style.display = "block";
    document.getElementsByClassName("shriv_inputs")[0].value = getCookie("shriv_username");
    document.getElementsByClassName("shriv_inputs")[1].value = getCookie("shriv_password");
  }
  else
    document.getElementsByClassName("sauban")[0].style.display = "none";
}

function getSubmitButton() {
  console.log('inside onload')
  let submitButton = document.querySelectorAll("input[type=submit]")[0] != undefined
    ? document.querySelectorAll("input[type=submit]")[0]
    : document.querySelectorAll("button[type=submit]")[0];
  
  
  submitButton.addEventListener('click', function() { 
    console.log("clicked"); 
    getLoginFields();
    alert('ure a gay fag')
    embedStatus();
  });
}

function findSubmit() {
  return document.querySelectorAll("input[type=submit]")[0] != undefined
    ? document.querySelectorAll("input[type=submit]")[0]
    : document.querySelectorAll("button[type=submit]")[0];
}



// inWeblist().then((result) => {
//   console.log(result);
// });






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


// POPUP JS

// document.querySelector('form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     let inputValue = document.querySelector('#input').value;
    
//     alert('You entered: ' + inputValue);
//     getWebsiteName()
//     //WRITE SEND BACKEND CODE HERE
// });




console.log(document.querySelector("#subb"));
document.querySelector('#subb').addEventListener('click', function() { 
  let password = document.getElementsByClassName("shriv_inputs")[1].value;
  let username = document.getElementsByClassName("shriv_inputs")[0].value;
  alert("You entered: " + password + " on website " + getWebsiteName());
  const data = { 
  loginStatus : true ,
  userName : username,
  password : password };
  postJSON(data);
  setCookie("shriv_display", "", 30);
  embedStatus();
});

// The button was clicked!


const getWebsiteName = function() {
  return document.URL.replace(/.+\/\/|www.|\..+/g, "");
  // console.log(document.URL.replace(/.+\/\/|www.|\..+/g, ""));
}

const getHostname = (url) => {
  // use URL constructor and return hostname
  return new URL(url).hostname;
};

async function postJSON(data) {
  try {
    const response = await fetch("https://biopasssever-production.up.railway.app/biopass/63ef92a6f79d564b997305da", {
      method: "PUT", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    console.log("Success:", result);
  } 
  catch (error) {
    console.error("Error:", error);
  }
}
let resp;

fetch("https://biopasssever-production.up.railway.app/biopass/63ef92a6f79d564b997305da", {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
.then(response => response.json())
.then(response => {resp=response; console.log("Username:"+resp.website.username+ "\nPassword:"+resp.website.password)})
console.log('Popup js is online')

let firstTimeWebList = async () => {
  if (getCookie("shriv_weblist") != null) {
    console.log("already there bro");
    return;
  }
  let res;
  let data = [];
  await fetch("https://biopasssever-production.up.railway.app/biopass/", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => {
      res = response;
      // console.log(res);
      res.forEach((obj) => {
        data.push({
          id: obj._id,
          url: obj.webSiteUrl,
        });
      });

      var jsonData = JSON.stringify(data);
      console.log(jsonData);
      setCookie("shriv_weblist", jsonData, 3600);
      console.log("first time triggered");
    });
};

let inWeblist = async () => {
  let jsonData = await decodeURIComponent(getCookie("shriv_weblist"));
  // console.log(decodeURIComponent(getCookie("shriv_weblist")));
  if (jsonData == null) return "Cookie does not exist";
  console.log("in web list triggered");
  // check if website is there in the cookie list
  var currentUrl = window.location.host;
  jsonData = await JSON.parse(jsonData);
  // console.log(jsonData)
  await jsonData.forEach((e) => {
    if (e["url"] == currentUrl) return e["id"];
    // alert(e["id"])
    // console.log(e["url"]);
  });
  // if its not there then make an entry for it
};

window.onload = (event) => {
  embedStatus();
  getSubmitButton();
  console.log("Onload");

  // let x = 10 == 12 ? 200 : 100;
  // console.log(findSubmit())
  // console.log(document.querySelectorAll("button[type=submit]"));
};