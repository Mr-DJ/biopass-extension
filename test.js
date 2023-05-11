const socketApprove = () => {
  const socket = io("https://biopasssever-production.up.railway.app/");

  // Handle events from the server
  socket.on("checkSocket", (data) => {
    console.log(data);
  });

  // Send a message to the server
  socket.emit("authenticate", "facebook");

  socket.on("authenticate", (data) => {
    console.log("Received message:", data);
  });

  socket.on("authResult", (data) => {
    console.log(data.success);
  });
}

window.onload = (event) => {
  socketApprove();
}