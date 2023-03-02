document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    let inputValue = document.querySelector('#input').value;
    
    alert('You entered: ' + inputValue);
    getWebsiteName()
    //WRITE SEND BACKEND CODE HERE
});


const getWebsiteName = function() {
  console.log(document.URL.replace(/.+\/\/|www.|\..+/g, ""));
  // console.log(document.URL.replace(/.+\/\/|www.|\..+/g, ""));
}

const getHostname = (url) => {
  // use URL constructor and return hostname
  return new URL(url).hostname;
};