
onload = init;
function init(){
    document.getElementById("hidden").style.display = "none";
}
function submit(){
    var name = document.getElementById("fname").value;
    name = name.trim();
    name = name.toLowerCase();
    document.getElementById("hidden").style.display = "block";
    window.localStorage.setItem("name", name);
    window.location = '/success.html'
}