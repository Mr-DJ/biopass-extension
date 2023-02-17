document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();
    let inputValue = document.querySelector('#input').value;
    
    alert('You entered: ' + inputValue);
  });