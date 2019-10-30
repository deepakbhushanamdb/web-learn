// var browser_name = navigator.appName;
// if (browser_name == "Netscape") {
// window.location = "https://www.google.com/chrome/"
// }
// else if (browser_name == "Microsoft Internet Explorer") {
// window.location = "https://www.microsoft.com/en-in/download/internet-explorer.aspx"
// }

// alert(navigator.platform);
// confirm("YEs?");
var abc = prompt("THISS");
document.cookie = "name=ab;date=1234;";
var n = 0;
var vvoid = void (0);
function Redirect() {
    let url = document.redirect.url.value;
    // window.location = "https://www.google.com/search?q=" + url
    window.open("https://www.google.com/search?q=" + url, "_blank")
}

function addcook() {
    document.cookie = n + "=" + n;
    n++;
}

function listcook() {
    var cook = document.cookie;
    document.getElementById("show_all_cookie").innerHTML = cook;
}

function WriteCookie() {
    let data;
    let name;
    name = document.form.key.value;
    data = document.form.value_pair.value;
    alert("Cookie being written is:" + name + " " + data);
    document.cookie = name + data;
}

function ShowCookie() {
    let allcookies;
    let all_cookies;
    allcookies = document.cookie;
    all_cookies = allcookies.split(";");
    for (let i = 0; i < all_cookies.length; i++) {
        let name = all_cookies[i].split("=")[0];
        let data = all_cookies[i].split("=")[1];
        document.getElementById("show_cookie").innerHTML = 'Name:' + name + " Value: " + data;

    }
    document.getElementById("show_all_cookie").innerHTML = allcookies;
}

