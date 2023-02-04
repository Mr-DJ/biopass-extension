document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    let inputValue = document.querySelector('#input').value;
    // Your logic goes here, for example:
    alert('You entered: ' + inputValue);
  });