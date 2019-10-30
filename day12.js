var count = 0;
var linebreak = "<br />";
while (count === 0) {
    document.write("Hello");
    count++;
}

do {
    document.write("Hello");
    count++;
} while (count === 0);
var i = 0;
var j;
for (i = 0, j = 0; i < 5, j < 10; i++) {
    document.write(linebreak);
    document.write(count);
    j++;
}
document.write(linebreak);
document.write(linebreak);
document.write(linebreak);

var array = [2, 2, 3, 4, 5, 6, 7];

for (var prop of array) {
    if (prop == 5) {
        continue;
    }
    pr(pr("THIS is using pr", " add"), 1);
    document.write(linebreak);
    document.write(prop);
    document.write(linebreak);
}

function pr(string1, string2) {
    document.write(string1 + string2);
    return 1;
}

function pri(string1) {
    document.write(string1);
    return 1;
}

function powerof(num1, num2) {
    let res = 1;
    for (let i = 0; i < num2; i++) {
        res *= num1;
    }
    return res;
}

pri(powerof(2, 4));

function powe(num3, num4) {
    if (num4 == 1) {
        return num3;
    } else {
        return num3 * powe(num3, num4 - 1);
    }
}

function over() {
    document.getElementById("overr").style.backgroundColor = "pink"
}

function loaded() {
    alert("loaded")
}

function clickon() {
    alert("you have clicked")
}

var area = function (len, breadth) {
    return len * breadth;
}

pri(area(2, 4) + "sq.cm")
pri(linebreak)
pri(powe(2, 4))
