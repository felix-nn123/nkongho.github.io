const navItems = document.getElementById("navClass");

window.onscroll = function (e) {
  if (this.scrollY < 20) {
    navItems.classList.remove("App-header1");
    navItems.classList.add("App-header");
  } else {
    navItems.classList.remove("App-header");
    navItems.classList.add("App-header1");
  }
};
