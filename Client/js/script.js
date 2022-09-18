
var icondesktopnew = document.getElementById("icondesktopnew");
icondesktopnew.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icondesktopnew.src = "assets/images/sun.png";
  } else {
    icondesktopnew.src = "assets/images/moon.png";
  }
};
var iconmobilenew = document.getElementById("iconmobilenew");
iconmobilenew.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    iconmobilenew.src = "assets/images/sun.png";
  } else {
    iconmobilenew.src = "assets/images/moon.png";
  }
};

