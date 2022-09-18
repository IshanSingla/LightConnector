const {Server}=require("socket.io");

const io=new Server(3000,{
    maxHttpBufferSize: 1e800000000000000,
    cors: {
//     origin: "http://lightconnectornew.vercel.app"
}});

io.on("connection",(socket)=>{

  socket.on("mobile-scan",(room)=>{
    socket.join(room);
    io.to(room).emit("transfer-ready");
  });

  socket.on("qr-generate",(room)=>{
    socket.join(room);
  });

  socket.on("transfer",({room,message,file,device})=>{
    console.log(room,message,file,device);
    io.to(room).emit("receive",message,file,device);
    console.log(1500);
  })


});

