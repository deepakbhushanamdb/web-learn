function validate() {
    if (document.valid.Name.value == "") {
        alert("Please enter your name");
        document.valid.Name.focus();
        return false;
    }
    if (!(document.valid.age.value > 0 && document.valid.age.value < 100)) {
        alert("Please enter a value between 1 and 100");
        document.valid.age.focus();
        return false;
    }
    if (document.valid.email.value == "") {
        alert("Please enter your email");
        document.valid.Name.focus();
        return false;
    } else {
        let email = document.valid.email.value;
        let atpos = email.indexOf("@");
        let dotpos = email.lastIndexOf(".");
        if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 > email.length) {
            alert("Please enter a valid email");
            document.valid.email.focus();
            return false;
        }
    }

    if (document.valid.address.value == "") {
        alert("Please enter your address");
        document.valid.address.focus();
        return false;
    }
    if (Math.floor(Math.log(document.valid.pin.value) / Math.LN10 + 1) < 6) {
        alert("Please enter a proper pincode");
        document.valid.pin.focus();
        return false;
    }

    if (document.valid.country.value == '-1') {
        alert("Please select a country");
        document.valid.country.focus();
        return false;
    }
    return true;
}

function func() {

    try {
        let a = 0;
        if (a === 0) throw ("A is zero exception");
        else
            alert("This is a" + a);
    } catch (e) {
        alert("Error is: " + e);
    } finally {
        alert("Finally executed")
    }

}