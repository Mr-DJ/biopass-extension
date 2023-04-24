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
  } catch (error) {
    console.error("Error:", error);
  }
}



console.log('Popup js is online')