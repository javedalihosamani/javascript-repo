function validate(e) {
    e.preventDefault();
    /* variables for each form elements */
    var name = document.cForm.name.value;
    var email = document.cForm.email.value;
    var mobile = document.cForm.mobile.value;
    var city = document.cForm.city.value;
    var gender = document.cForm.gender.value;
    var lang =[];
    var checkOpt = document.getElementsByName("lang[]");
    for(var i=0; i< checkOpt.length; i++) {
        if(checkOpt[i].checked) {
            // populate lang array with selected input values
            lang.push(checkOpt[i].value);
        }
    }

    /* define an error variables */
    var nameErr = emailErr = mobileErr = genderErr = langErr = true;

    /* name validation */
    if(name === ""){
        printError("nameErr","Name field cannot be empty");
    }else {
        let regex = /^[a-zA-Z\s]+$/;
        if(regex.test(name) === false) {
            printError("nameErr","Please enter a valid name");
        } else{
            printError("nameErr","");
            nameErr = false
        }
    }

    /* email validation */
    if(email === "") {
        printError("emailErr","Email field cannot be empty");
    } else {
        let regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            printError("emailErr","Invalid Email id");
        } else {
            printError("emailErr","");
            emailErr = false;
        }
    }

    /* mobile validation */
    if(mobile === "") {
        printError("mobileErr","Mobile field cannot be empty");
    } else {
        let regex = /^[6-9]\d{9}$/;
        if(regex.test(mobile) === false) {
            printError("mobileErr","Invalid Mobile number");
        } else {
            printError("mobileErr","");
            mobileErr = false;
        }
    }

    /* city validation */
    if(city === "null") {
        printError("cityErr", "Please select city name");
    } else {
        printError("cityErr", "");
        cityErr = false;
    }

    /* gender validation */
    if(gender === "") {
        printError("genderErr","Please select gender");
    } else {
        printError("genderErr","");
        genderErr = false;
    }
}


/* defining a function to display the error message */
function printError(eleId,msg) {
    document.getElementById(eleId).innerText = msg;
}