onload = init;
function init() {
  document.getElementById("hidden").style.display = "none";
  const element = document.getElementById("fname");
  element.addEventListener("keydown", function (event) {
    console.log(event);
    if (event.key == "Enter") {
      event.preventDefault();
        submit();
    }
  });
}
function submit() {
  var name = document.getElementById("fname").value;
  name = name.trim();
  name = name.toLowerCase();
  document.getElementById("hidden").style.display = "block";
  window.localStorage.setItem("name", name);
  window.location = "/success.html";
}
