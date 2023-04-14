const initiateExt = function() {
  const injectElement=document.createElement('div');
  injectElement.className = 'sauban';
  // injectElement.innerHTML =
  //   '<html><head><style> html{ background-color: antiquewhite; border-radius: 20px; } button[type="submit"] { background-color: green; color: white; border-radius: 20px; padding: 10px 20px; border: none; cursor: pointer; margin-top: 10px; } button[type="reset"] { background-color: red; color: white; border-radius: 20px; padding: 10px 20px; border: none; cursor: pointer; margin-top: 10px; } input[type="text"], input[type="password"] { border-radius: 20px; border: 2px solid rgb(43, 103, 233); padding: 10px; } .shrivardan { display: none; } </style> </head><body><form class="shrivardan" ><div><label for="username">Username:</label><input type="text" id="sinwan_username" name="username"></div><div><label for="password">Password:</label><input type="password" id="sinwan_password" name="password"></div><div><button type="submit">Save</button><button type="reset">Cancel</button></div></form>';
  injectElement.innerHTML = `<html>
    <head>
      <style>
          html {  
            border-radius: 20px;
          }

          button[type="submit"] {
            background-color: green;
            color: white;
            border-radius: 20px;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            margin-top: 10px;
          }

          button[type="reset"] {
            background-color: red;
            color: white;
            border-radius: 20px;
            padding: 10px 20px;
            border: none;
            cursor: pointer;
            margin-top: 10px;
          }

          input[type="text"], input[type="password"] {
            border-radius: 20px;
            border: 2px solid rgb(43, 103, 233);
            padding: 10px;
          }

          .shrivardan {
            display: none;
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
          <div>
            <button id="subb" type="submit"">Save</button>
            <button id="canc" type="reset">Cancel</button>
          </div>
        </form>
        <script type="text/javascript" src="popup.js"></script>
      </body>
</html>`;
  document.body.appendChild(injectElement);
}
initiateExt();


// async function postJSON(data) {
//   try {
//     const response = await fetch("https://biopasssever-production.up.railway.app/biopass/addWeb/", {
//       method: "PUT", // or 'PUT'
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });

//     const result = await response.json();
//     console.log("Success:", result);
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }

// const data = { 
//   loginStatus : true ,
// userName : "PGautam27",
// password : "12345" };
// postJSON(data);