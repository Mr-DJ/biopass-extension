console.log('Started');

// if (len == 0) {
//   console.log("there is no form");
// }
// console.log("there might be a form");

const setCookie = (name, value, maxAgeSeconds) => {
  var maxAgeSegment = "; max-age=" + maxAgeSeconds;
  document.cookie = encodeURI(name) + "=" + encodeURI(value) + maxAgeSegment;
}

const getCookie = (name) => { 
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

const setLocalWithExpiry = (key, value, ttl) => {
  const now = new Date();

  // `item` is an object which contains the original value
  // as well as the time when it's supposed to expire
  const item = {
    value: value,
    expiry: now.getTime() + (ttl * 1000),
  };
  localStorage.setItem(key, JSON.stringify(item));
}


const getLocalWithExpiry = (key) => {
  const itemStr = localStorage.getItem(key);
  // if the item doesn't exist, return null
  if (!itemStr) {
    return null;
  }
  const item = JSON.parse(itemStr);
  const now = new Date();
  // compare the expiry time of the item with the current time
  if (now.getTime() > item.expiry) {
    // If the item is expired, delete the item from storage
    // and return null
    localStorage.removeItem(key);
    return null;
  }
  return item.value;
}

const getLoginFields = () => {
  let pass, user;
  let inputs = document.getElementsByTagName("input");
  let len = inputs.length;
  while (len--) {
    if (inputs[len].type === "password") {
      pass = inputs[len].value;
      user = len > 0 && (inputs[len - 1].type === "text" || inputs[len - 1].type === "email") ? inputs[len - 1].value : user;
    }
  }

  console.log(user);
  console.log(pass);

  if(user == undefined || pass == undefined) {
    console.log("Unable to find the login fields");
    return;
  }

  if (user.length == 0 || pass.length == 0) {
    console.log("One or more fields might be empty");
    // AHUYY??
  } else {
    console.log("password -> " + pass);
    document.getElementsByClassName("shriv_inputs")[1].value = pass;
    setCookie("shriv_password", pass, 30);
    console.log("user -> " + user);
    document.getElementsByClassName("shriv_inputs")[0].value = user;
    setCookie("shriv_username", user, 30);
    setCookie("shriv_display", "block", 30);
  }
}

const embedStatus = () => {
  if(getCookie('shriv_display') == "block") {
    document.getElementsByClassName("sauban")[0].style.display = "block";
    document.getElementsByClassName("shriv_inputs")[0].value = getCookie("shriv_username");
    document.getElementsByClassName("shriv_inputs")[1].value = getCookie("shriv_password");
  }
  else {
    console.log("Clearing display");
    document.getElementsByClassName("sauban")[0].style.display = "none";
  }
}

const getSubmitButton = () => {
  let re = /(Log\s*in|Sign\s*up|Sign\s*in|Register)/gim;
  let possibleSubmits = document.querySelectorAll("input,button");
  let submitButton = (document.querySelectorAll("input[type=submit]")[0] || document.querySelectorAll("button[type=submit]")[0]);

  if(submitButton.id == "subb") {
    submitButton = undefined;
  }

  if(!submitButton) {
    for (var i = 0; i < possibleSubmits.length; i++) {
      // console.log(possibleSubmits[i]);
      if(possibleSubmits[i].id == "subb") possibleSubmits[i].remove();
      console.log(possibleSubmits[i].textContent.trim());
      if (re.test(possibleSubmits[i].textContent.trim())) {
        submitButton = possibleSubmits[i];
        break;
      }
    }
  } 

  if(submitButton) {
    submitButton.addEventListener("click", () => {
      console.log("clicked");
      getLoginFields();
      // alert('ure a gay fag')
      embedStatus();
    });
  }

  console.log(submitButton);
};

const filldetails = async() => {
  let pass, user;
  let webID = inWeblist();
  let inputs = document.getElementsByTagName("input");
  let len = inputs.length;

  if(!webID) {
    console.log("Can't autofill, first time there are no details saved on server");
    return;
  }

  while (len--) {
    if (inputs[len].type === "password" && inputs[len].className!="shriv_inputs") {
      pass = inputs[len];
      user = len > 0 && (inputs[len - 1].type === "text" || inputs[len - 1].type === "email") ? inputs[len - 1] : user;
    }
  }
  console.log(user);
  console.log(pass);


  let response = await fetch(
    `https://biopasssever-production.up.railway.app/biopass/${webID}`,
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );

  let resdata = await response.json();

  console.log("Username: " + resdata.website.username + "\nPassword: " + resdata.website.password);

  if(user && pass) {
    user.value = resdata.website.username;
    pass.value = resdata.website.password;
  }
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
  //alert("You entered: " + password + " on website " + getWebsiteName());
  const data = { 
  loginStatus : true ,
  username : username,
  password : password };
  postJSON(data);
  console.log("Setting block");
  setCookie("shriv_display", "", 30);
  embedStatus();
});

// The button was clicked!


const getWebsiteName = function() {
  return document.URL.replace(/.+\/\/|www.|\..+/g, "");
  // console.log(document.URL.replace(/.+\/\/|www.|\..+/g, ""));
}

const getHostname = () => {
  // use URL constructor and return hostname
  return window.location.host;
};

const postJSON = async (data) => {
  let webID = inWeblist();

  if(webID) {
    try {
      let uri = "https://biopasssever-production.up.railway.app/biopass/" + webID;
      // alert(uri);
      const response = await fetch(uri, {
        method: "PUT", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = response.json();
      console.log("Success:", result);
    } catch (error) {
      console.error("Error:", error);
    }
  } else {
    //do a first time POST request and update the cookie as well
    try {
      let uri = "https://biopasssever-production.up.railway.app/biopass/addWeb/";
      let newdata = { ...data, websiteName: getWebsiteName(), websiteUrl: getHostname() };
      console.log("Date sending is... ");
      console.log(newdata);
      let response = await fetch(uri, {
        method: "POST", // or 'PUT'
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newdata),
      });
    } catch(e) {
      console.error(e);
    }
  }
}

console.log('Popup js is online')

const firstTimeWebList = async () => {
  let cookie = getLocalWithExpiry("shriv_weblist");
  if (cookie === undefined) {
    console.log("Cookie doesnt exist");
    return;
  } 
  // if (cookie != null) {
  //   console.log("already there bro");
  //   return;
  // }

  let data = [];
  let response = await fetch(
    "https://biopasssever-production.up.railway.app/biopass/",
    {
      method: "GET",
      headers: {
        Accept: "application/json",
      },
    }
  );

  let resdata = await response.json();
  
  console.log(resdata);

  resdata.forEach((obj) => {
    data.push({
      id: obj._id,
      url: obj.webSiteUrl,
    });
  });

  var jsonData = JSON.stringify(data);
  console.log(jsonData);
  setLocalWithExpiry("shriv_weblist", jsonData, 3600);
  console.log("Creating or updating weblist inside firstTimeWeblist");
};

let inWeblist = () => {
  let cookie = getLocalWithExpiry("shriv_weblist");
  if(cookie === undefined) { 
    console.log("Cookie not found");
    return false;
  }
  let jsonData = decodeURIComponent(cookie);
  if (jsonData === null) {
    console.log("Cookie empty");
    return false;
  }
  console.log("in web list triggered");
  
  // check if website is there in the cookie list
  var currentUrl = getHostname();
  try {
    let parsedData = JSON.parse(jsonData);
    // console.log(jsonData)
    return parsedData.find((entry) => entry.url === currentUrl)?.id;
  } catch(e) { return false; } 
};



// console.log(inWeblist());

window.onload = (event) => {
  embedStatus();
  getSubmitButton();
  firstTimeWebList();
  // filldetails();
  //socketsfunc();
  console.log("Executing onload");
};


// window.addEventListener("load", () => {
//   getSubmitButton();
//   console.log("Executing fully loaded");
// }); 
// page fully loaded
