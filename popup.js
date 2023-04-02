// document.querySelector('form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     let inputValue = document.querySelector('#input').value;
    
//     alert('You entered: ' + inputValue);
//     getWebsiteName()
//     //WRITE SEND BACKEND CODE HERE
// });




console.log(document.querySelector("#subb"));
document.querySelector('#subb').addEventListener('click', function() { 
  let inputValue = document.getElementsByClassName("shriv_inputs")[1].value;
  alert("You entered: " + inputValue + " on website " + getWebsiteName());
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

console.log('Popup js is online')