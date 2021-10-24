var text = document.querySelector("h3");
var color1 = document.getElementById('color1');
var color2 = document.getElementById('color2');
var bodyEle = document.getElementById("body");

// bodyEle.style.background = "red";

function backgroundFunc(){
    bodyEle.style.background = "linear-gradient(to right," + color1.value + "," + color2.value + ")";
    console.log("hai");
}

// color1.addEventListener("input", backgroundFunc)
// color2.addEventListener("input", backgroundFunc)

