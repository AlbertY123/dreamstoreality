window.onload = all
const techlist = [
    "html",
    "css",
    "javascript",
    "react",
    "nodejs",
    "php"
]
var result;
function all(){
    var name = window.localStorage.getItem("name");
    for(i=0;i<techlist.length;i++){
        if(techlist[i] == name){
            result = true;
            break;
        }
        else{
            result = false;
        }
    }
    if(result){
        document.getElementById("confirm").innerHTML = "We know that you are a " + name + " developer! Or to be more accurate, a dev that want's to learn "+ name + ". We are here to help :)";
        if(name=="html"){
            document.getElementById('step1').innerHTML = "Step 1, learn how to use " + name + "." + " Also install an IDE to help you get started.";
            document.getElementById('step2').innerHTML = "Step 2, open up our IDE, the hardest bit about HTML is getting started. Don't worry, continue reading and we'll help";
        }
    }
    else{
        alert("Please Fill The form with one of the listed technologies")
        location = "/index.html"
    }
}