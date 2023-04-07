const express = require("express");
const http = require("http");
const socket = require("socket.io");
const path = require("path");
const { getIPAddress } = require("./utils/getIPAddress");

// Setups Servers/ Socket
const app = express();
const server = http.createServer(app);
const io = socket(server);

app
  .set("view engine", "ejs")
  .use(express.static("public"))
  .use(express.json())
  // .use(morganImpl)
  .use(express.urlencoded({ extended: false }))
  .set("views", path.join(__dirname, "views"))
  .set("public", path.join(__dirname, "public"))
  .use("/", require("./routes"));

// const io=new Server(3000,{
//     maxHttpBufferSize: 1e800000000000000,
//     cors: {
// //     origin: "http://lightconnectornew.vercel.app"
// }});

io.on("connection", (socket) => {
  socket.on("mobile-scan", (room) => {
    socket.join(room);
    io.to(room).emit("transfer-ready");
  });

  socket.on("qr-generate", (room) => {
    socket.join(room);
  });

  socket.on("transfer", ({ room, message, file, device }) => {
    console.log(room, message, file, device);
    io.to(room).emit("receive", message, file, device);
    console.log(1500);
  });
});

const PORT = Number(process.env.PORT) || 3000;

const text = `
************************************************************
                  Listening on port: ${PORT}
                  http://localhost:${PORT}
                  http://${getIPAddress()}:${PORT}
************************************************************`;

server.listen(PORT, () => {
  console.log(text);
});
