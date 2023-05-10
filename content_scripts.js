const initiateExt = () => {
  const injectElement = document.createElement('div');
  injectElement.className = 'sauban';
  //injectElement.className = 'sauban2';
  // injectElement.innerHTML =
  //   '<html><head><style> html{ background-color: antiquewhite; border-radius: 20px; } button[type="submit"] { background-color: green; color: white; border-radius: 20px; padding: 10px 20px; border: none; cursor: pointer; margin-top: 10px; } button[type="reset"] { background-color: red; color: white; border-radius: 20px; padding: 10px 20px; border: none; cursor: pointer; margin-top: 10px; } input[type="text"], input[type="password"] { border-radius: 20px; border: 2px solid rgb(43, 103, 233); padding: 10px; } .shrivardan { display: none; } </style> </head><body><form class="shrivardan" ><div><label for="username">Username:</label><input type="text" id="sinwan_username" name="username"></div><div><label for="password">Password:</label><input type="password" id="sinwan_password" name="password"></div><div><button type="submit">Save</button><button type="reset">Cancel</button></div></form>';
  // z-index: 9999;
  // position: sticky;
  injectElement.innerHTML = `<html>
    <head>
      <style>
          .sauban {
            padding: 7px;
            width: fit-content;
            position: fixed;
            top: 10px;
            right: 10px;
            font-family: "Lucida Console", "Courier New", monospace;
            background-color: lightgrey;
            
            display: none;
          }
          
          .shrivardan input {
            border-radius: 0;
            padding: 5px;
          }
          
          .shrivardan div {
            display: flex;
            justify-content: space-between;
            padding-bottom: 2px;
          }
          
          .shrivardan button {
            color: white;
            padding: 10px 20px;
            border: none;
            margin-top: 10px;
            cursor: pointer;
          }

          .shrivardan button[type="submit"] {
            background-color: green;
          }
    
          .shrivardan button[type="reset"] {
            background-color: red;
          }

          .shrivardan .inline {
            display: inline;
          }

      </style>    
    </head>
          
    <body>
      <form class="shrivardan">
        <div>
          <label for="username">Username:</label>
          <input type="text" id="username" name="username" class="shriv_inputs">
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" id="password" name="password" class="shriv_inputs">
        </div>
        <div class="inline">
          <button id="subb" type="submit">Save</button>
          <button id="canc" type="reset">Cancel</button>
        </div>
      </form>
        <script type="text/javascript" src="biopass.js"></script>
    </body>
</html>`;
  document.body.appendChild(injectElement);
}

initiateExt();


