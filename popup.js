// document.querySelector('form').addEventListener('submit', function (event) {
//     event.preventDefault();
//     let inputValue = document.querySelector('#input').value;
    
//     alert('You entered: ' + inputValue);
//     getWebsiteName()
//     //WRITE SEND BACKEND CODE HERE
// });

const clickShriv = function() {
  let inputValue = document.getElementsByClassName('shriv_inputs')[1];
  alert('You entered: ' + inputValue);
  getWebsiteName();
}



console.log(document.querySelector("#subb"));
document.querySelector('#subb').addEventListener('click', function(){ alert('The button was clicked!') });

// The button was clicked!
// The button was clicked!


const getWebsiteName = function() {
  console.log(document.URL.replace(/.+\/\/|www.|\..+/g, ""));
  // console.log(document.URL.replace(/.+\/\/|www.|\..+/g, ""));
}

const getHostname = (url) => {
  // use URL constructor and return hostname
  return new URL(url).hostname;
};

console.log('Popup js is online')