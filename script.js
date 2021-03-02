function okBuddy() {
  var rotator = document.getElementById("rotator");
  var result = Math.floor(Math.random() * 32) + 1;
  rotator.setAttribute(
    "src",
    `gutters/gutter${result}.gif`
  );
};