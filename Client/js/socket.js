var socket; 

try{
socket= io("http://3.110.215.239:3000")
}catch(e){
    alert("not able to connect to sockets")
}


socket.on("connect", () => {
    console.log(socket.id);
});



socket.on("disconnect", () => {
    // window.reload();
});






