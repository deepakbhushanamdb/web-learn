class Car {
    constructor(name, dimension, colour) {
        if (name) {
            // console.log("No name");
            this.carname = name;
        } else {
            this.carname = "Default";
        }
        if (!dimension) {
            // console.log("No Dimension");
            this.cardimension = "Default";
        } else {
            this.cardimension = dimension;
        }
        if (!colour) {
            // console.log("No colour");
            this.colour = "Default";
        } else {
            this.colour = colour;
        }
    }
    print_all(){
        console.log("The object properties are: "+ this.carname + " " + this.cardimension + " " + this.colour);
    }
}

maruti = new Car("Maruti");
maruti1 = new Car();
maruti2 = new Car("", "", "Red");
maruti3 = new Car("Swift", "24x24");
maruti4 = new Car("Breeze", "", "Pink");
maruti5 = new Car("", "40x40");
maruti6 = new Car("Benz","50x50","White");

console.log("Maruti:" + maruti.carname + maruti.cardimension + maruti.colour);
console.log("M1 " + maruti1.carname + maruti1.cardimension + maruti1.colour);
console.log("M2 " + maruti2.carname + maruti2.cardimension + maruti2.colour);
console.log("M3 " + maruti3.carname + maruti3.cardimension + maruti3.colour);
console.log("M4 " + maruti4.carname + maruti4.cardimension + maruti4.colour);
console.log("M5 " + maruti5.carname + maruti5.cardimension + maruti5.colour);
console.log("Test");


console.log("Function call : ");
maruti6.print_all();


function adddimension(dimension) {
    with(this){
        cardimension = dimension;
    }
}


var num = Number(10.01);

console.log(num.MAX_VALUE);
console.log(num.MIN_VALUE);
console.log(num);

var boo = Boolean("True");

var str = String("THIS IS A GOOD DAy");

console.log(str.length);
console.log(str.charAt(5));
console.log(str.indexOf('G'));
console.log(str.concat("ATT"));

var arr = Array("Name","Number","Address");
var arra = ["apple","rage","Spell"];

console.log(arr.length);
console.log(arr.indexOf("Number"));
console.log(arr.sort());


var date_now = new Date();

console.log(date_now);

var pattern = "/search/";
var regex = RegExp(pattern);

var example = "asdascasc/search/";

console.log(example.search(regex));

console.log(example.replace(regex,"Hi"));

// DOM

// window.
// document.
// form.







