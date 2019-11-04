document.getElementById("abc").style.color = "blue";
var x = document.getElementsByName("form1");
// alert(x);
for(let i=0;i<x.length;i++){
    if(x[i].type == "checkbox")
    x[i].checked= true;
}

var y = document.getElementsByClassName("body");
// alert(y.length);
y[0].style.backgroundColor = 'white';

var buttonn = document.createElement("button");
buttonn.innerText = "Click me";
buttonn.attributes = "color: pink"
document.body.appendChild(buttonn);