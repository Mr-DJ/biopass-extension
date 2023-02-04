//document.querySelector("u_0_s_y7").addEventListener("click", function() {
    // Your logic goes here, for example:
    //window.open("poopup.html", "extension_popup", "width=300,height=200");
  //});
  const sex=function()
  {
    const injectElement=document.createElement('div');
    injectElement.className='sauban';
    // injectElement.innerHTML =
    //   '<html> <head> <style> html{ background-color: antiquewhite; border-radius: 20px; } button[type="submit"] { background-color: green; color: white; border-radius: 20px; padding: 10px 20px; border: none; cursor: pointer; margin-top: 10px; } button[type="reset"] { background-color: red; color: white; border-radius: 20px; padding: 10px 20px; border: none; cursor: pointer; margin-top: 10px; } input[type="text"], input[type="password"] { border-radius: 20px; border: 2px solid rgb(43, 103, 233); padding: 10px; } .shrivardan { display: none; } </style> </head><body><form class="shrivardan" ><div><label for="username">Username:</label><input type="text" id="sinwan_username" name="username"></div><div><label for="password">Password:</label><input type="password" id="sinwan_password" name="password"></div><div><button type="submit">Save</button><button type="reset">Cancel</button></div></form>';
    
    injectElement.innerHTML = `<html>
 
      <head>
        
        <style>
            html{
              
         background-color: antiquewhite;     
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
              <input type="text" id="username" name="username">
            </div>
            <div>
              <label for="password">Password:</label>
              <input type="password" id="password" name="password">
            </div>
            <div>
              <button type="submit">Save</button>
              <button type="reset">Cancel</button>
            </div>
          </form>
          <script type="text/javascript" src="popup.js"></script>  
    </body>
    
</html>`;
    document.body.appendChild(injectElement);
  }
  sex();