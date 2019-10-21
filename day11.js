function alert_user() {
  alert("Hello, Please do not click")
  var variable = "local"
}

document.write(typeof(alert_user))

var name = 101
var date= "jan"
var linebreak = "<br />"

if (name == 10){
  document.write("Name is 10")
}
else if (name == 101) {
  document.write("Name is 101")
}
else{
  document.write("Name is not 10")
}
document.write(linebreak)

switch (date) {
  case 1:
  break;
  case 2:
  break;
  case 3:
  break;
  case 4:
  break;
  default:document.write("Jan is the case")
}
