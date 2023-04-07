const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(200).send(`<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossorigin="anonymous"
        />
        <link rel="stylesheet" href="./css/new.css" />
        <link rel="icon" type="image/x-icon" href="./assets/images/favicon.ico" />
        <title>Buddy Connector || Wireless open data Shairing system</title>
      </head>
    
      <body>
        <nav class="mt-3">
          <div class="container desktopnew">
            <div class="row justify-content-between">
              <div class="col-md-5">
                <img
                  class="nav-icon"
                  src="./assets/images/link.png"
                  alt="Image not available"
                />
              </div>
              <div class="col-md-1 moonImg">
                <img
                  src="./assets/images/moon.png"
                  alt="Image not available"
                  id="icondesktopnew"
                />
              </div>
            </div>
          </div>
          <div class="container mobilenew">
            <div class="row">
              <div class="ham col-3" style="height: 5rem">
                <img src="assets/images/favicon.ico" alt="Image not available" />
              </div>
              <div class="text-end mt-4 col-5 moonImg">
                <img
                  src="assets/images/moon.png"
                  alt="Image not available"
                  id="iconmobilenew"
                />
              </div>
            </div>
          </div>
        </nav>
        <div class="main"></div>
      </body>
      <script src="https://reeteshghimire.com.np/wp-content/uploads/2021/05/html5-qrcode.min_.js"></script>
      <script
        src="https://cdn.socket.io/4.5.0/socket.io.min.js"
        integrity="sha384-7EyYLQZgWBi67fBtVxw60/OWl1kjsfrPFcaU0pp0nAh+i8FD068QogUvg85Ewy1k"
        crossorigin="anonymous"
      ></script>
      <script src="./js/static.js"></script>
      <script src="./js/util.js"></script>
      <script src="./js/socket.js"></script>
      <script src="./js/index.js"></script>
      <script src="./js/script.js"></script>
    </html>
    `);
  // res.redirect("/IoTDevices/7NaBu4XYlCap28WYIByz");
});

module.exports = router;
