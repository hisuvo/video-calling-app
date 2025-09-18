const { Server } = require("socket.io");

const io = new Server(4000);

io.on("connection", (socket) => {
  // send message to the client
  socket.emit("name", "my name is suvo datta");

  // recive a message from the client
  socket.on("reply", (arg) => {
    console.log(arg);
  });
});
