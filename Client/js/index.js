// join function to a session
socket.on("transfer-ready", () => {
  document.getElementsByClassName("main")[0].innerHTML = homePage
  const scriptTag = document.createElement("script");
  scriptTag.src = "./js/home.js";
  document.body.appendChild(scriptTag);
});

let qrValue = 4343344334;
(async()=>{
  qrValue = await Math.random() * 90000
})
// session id gen

// qr scan socket connector
function onScanSuccess(qrCodeMessage) {
  try {
    socket.emit("mobile-scan", qrValue);
  } catch (e) {
    alert(`error: ${e}`)
  }
  ;
}
// qr scan error
function onScanError(errorMessage) {
  alert(`message: "unable to scan"`);
}

// device check for mobile or pc for scanner or joiner
let ish = document.getElementsByClassName("main")[0];
if (checkDevice() === 0) {
  ish.innerHTML = `<div class="flex w-100 scannerclass justify-content-center"><div  id="reader"></div></div>`;
  var html5QrcodeScanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250, });
  html5QrcodeScanner.render(onScanSuccess, onScanError);
} else {
  ish.innerHTML = indexPagePc(qrValue);
  socket.emit("qr-generate", qrValue);
}
