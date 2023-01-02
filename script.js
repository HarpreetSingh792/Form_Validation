let darkMode = localStorage.getItem("darkMode");
//This is for button  that we used with font-awesome icon:
const btnIcon = document.getElementById('theme-btn')
//This is for theme icon we use from font-awesome:
const themeIcon = document.getElementById('theme-i');
//This will give us the whole div container which contain the form section:
const dark = document.getElementById('form-container');
//This will select all the input from the form that we have 
const input = document.querySelectorAll('input');
// Submit Button
const sbtBtn = document.getElementById('submit-btn');
//Label color :
let labelColor = 'darkblue';

const root = document.querySelector(':root');
function setRoot(labelColor) {
    root.style.setProperty('--labelColor', labelColor);
}


//To check is darkMode enable or not by system local machine:
if (darkMode === true) {
    enableDark();

}

//This function will disable the dark theme:
const disableDark = () => {
    document.body.classList.remove("darkMode");
    localStorage.removeItem("darkMode", null);
    dark.style.backgroundColor = 'rgba(200, 200, 200,0.945)';
    dark.style.boxShadow = '4px 4px 5px black ,-4px -4px 5px black';
    themeIcon.style.color = 'black';
    themeIcon.style.transition = '0.2s';
    btnIcon.style.backgroundColor = 'white';
    itr(input, 'rgb(0, 0, 0)', 'white');
    labelColor = 'darkblue';
    setRoot(labelColor);

}


//This function will enable the dark theme:
const enableDark = () => {
    //update the darkMode of the client Local Storage: 
    localStorage.setItem("darkMode", "enabled");
    document.body.classList.add("darkMode");
    dark.style.backgroundColor = 'rgb(1, 0, 3,0.7)';
    dark.style.boxShadow = 'none';
    themeIcon.style.color = 'white';
    themeIcon.style.transition = '0.2s';
    btnIcon.style.backgroundColor = 'black';
    itr(input, 'rgb(0, 0, 0)', 'white');
    labelColor = 'white';
    setRoot(labelColor);
}
//This function will iterate all the inputs and set their value as required:
function itr(item, bgcol, col) {
    for (let i of item) //declaration and definition of variable i:
    {
        i.style.background = bgcol;
        i.style.color = col;
    }


}

function themeButton() {
    darkMode = localStorage.getItem('darkMode');
    //This will works as if we press the button second time :
    if (darkMode !== 'enabled') {
        enableDark();

        //to check :
        // console.log(darkMode);


    }
    //This will works as if we press the button first time :
    else {

        disableDark();
        //to check :
        // console.log(darkMode);
    }
};
if (darkMode === "enabled") {
    enableDark();
    labelColor = 'white';
    setRoot(labelColor);
}
else {
    labelColor = 'darkblue';
    setRoot(labelColor);
}

//This is use to change the system theme :
btnIcon.addEventListener('click', themeButton);


//This is used as the name suggest for labels:
let label = document.getElementsByTagName('label');
let label1 = document.getElementById('uname');
let label2 = document.getElementById('l-email');
let label3 = document.getElementById('pw');
let label4 = document.getElementById('cpw');


//Function or prototype to move label in form :
function labelPlace(name, labelNo) {

    if (name != 0) //when the input of the form contain a string of even 1 or more length or words:
    {
        // console.log('full');  //To test whether the input field contain a string or not:
        labelNo.style.transition = '0.1s';
        labelNo.style.bottom = '68px';
        labelNo.style.fontSize = '16px';
        labelNo.style.fontWeight = '700';

    }
    else {
        // console.log('empty'); //To test whether the input field contain a string or not:
        labelNo.style.bottom = '32px';
        labelNo.style.zIndex = '1';
        labelNo.style.transition = '0.2s';
        labelNo.style.fontSize = '16px';
        labelNo.style.fontWeight = '700';
    }

}
//This will call the prototype for the correct field:

let paraUname = document.getElementById('para-uname');
let uName = '';

input[0].addEventListener('input', () => {
    let uname = document.forms[0]['username'].value;
    labelPlace(uname, label1);
    uName = uname;
    if (uname.length == 0) {
        input[0].setAttribute('required', '');
        paraUname.innerHTML = 'username not be empty';
        sbtBtn.style.zIndex = '-1';
        sbtBtn.style.opacity = '.2';
    }
    else if (uname.length <= 3) {
        input[0].setAttribute('required', '');
        paraUname.innerHTML = 'username is too short';
        sbtBtn.style.zIndex = '-1';
        sbtBtn.style.opacity = '.2';
    }
    else if (uname.length > 16) {
        input[0].setAttribute('required', '');
        paraUname.innerHTML = 'username is too long';
        sbtBtn.style.zIndex = '-1';
        sbtBtn.style.opacity = '.2';
    }
    else {
        paraUname.innerHTML = '';
        sbtBtn.style.opacity = '1';
        sbtBtn.style.zIndex = '0';
    }

});
let eMailStr = '';
let paraEmail = document.getElementById('para-email');
input[1].addEventListener('input', () => {
    let email = document.forms[0]['email'].value;
    //for label to make stable, if there is something inputted in the field
    labelPlace(email, label2);
    //through form accessing variable email
    // console.log(email);
    //through document accessing variable eMail
    let eMail = document.getElementById('email');
    eMailStr = email;
    if (eMailStr.length == 0) {

        eMail.setAttribute('required', '');
        paraEmail.innerHTML = 'email not be empty';
    }

    else if (eMailStr.includes('@') && (eMailStr.includes('.com') || eMailStr.includes('.org') || eMailStr.includes('.in'))) {
        sbtBtn.style.zIndex = '0';
        sbtBtn.style.opacity = '1';
        paraEmail.innerHTML = '';
    }
    else {
        sbtBtn.style.zIndex = '-1';
        sbtBtn.style.opacity = '.2';
        paraEmail.innerHTML = 'email not valid';
    }
});

//form password validate :


function hiddenEyeFun() {

    // console.log(pswClick); //to check running or not 
    pswClick++;
    if (pswClick % 2 == 0) {
        let iPass = document.getElementById('i-psw');
        iPass.style.color = 'white';
        let pass = document.getElementById('psw');
        pass.setAttribute('type', 'password');
        // console.log('even'); //for testing whether running or not
    }
    else {

        let iPass = document.getElementById('i-psw');
        iPass.style.color = 'green';
        let pass = document.getElementById('psw');
        pass.setAttribute('type', 'text');
        // console.log(pass); //for testing whether running or not
    }
}

//these variables are for making confirm validate checking whether both the pass section is not null or empty ?:
let ps = '';
let cps = '';

//this variable for declaring the id of p tag at global scope:  
let paraCpsw = document.getElementById('para-cpsw');
// password showing icon :
const showEye = document.getElementById('btn-psw');
let pswClick = 0; //Initialising the counter for eye click button
showEye.addEventListener('click', hiddenEyeFun)
input[2].addEventListener('input', () => {
    let paraPsw = document.getElementById('para-psw');
    var psw = document.forms[0]['psw'].value;
    labelPlace(psw, label3);
    ps = psw; //initialising the value 

    //Form Confirm Validation
    if (ps == cps && ps != 0) {

        cIcon.style.opacity = '1';
        // console.log('true'); //for testing whether running or not 
        paraCpsw.innerHTML = " ";
        sbtBtn.style.zIndex = '0';
        sbtBtn.style.opacity = '1';
    }
    else {
        // console.log('error'); //for testing whether running or not 
        paraCpsw.innerHTML = "must be matched with password";
        cIcon.style.opacity = '0';
        sbtBtn.style.zIndex = '-1';
        sbtBtn.style.opacity = '.2';
    }

    if (ps.length == 0) {
        paraPsw.innerHTML = "password not be empty";
    }
    else if (ps.length < 8) {
        paraPsw.innerHTML = "password is too short"
    }
    else {
        paraPsw.innerHTML = "";
    }

    if (eMailStr.length == 0) {
        paraEmail.innerHTML = 'email not be empty';
        input[1].setAttribute('required', '');
        sbtBtn.style.zIndex = '-1';
        sbtBtn.style.opacity = '.2';
    }
    if (uName.length == 0) {
        paraUname.innerHTML = 'username not be empty';
        input[0].setAttribute('required', '');

    }

});

//confirm-pass icon, if matches get enables:
const cIcon = document.getElementById('i-cpsw');
// confirming the form validation :
input[3].addEventListener('input', () => {
    let cpsw = document.forms[0]['cpsw'].value;
    labelPlace(cpsw, label4);
    cps = cpsw; //initialising the value
    if (ps == cpsw && cps != 0) {

        cIcon.style.opacity = '1';
        // console.log('true'); //for testing whether running or not 
        paraCpsw.style.opacity = '0';
        paraCpsw.innerHTML = "";
        sbtBtn.style.zIndex = '0';
        sbtBtn.style.opacity = '1';
    }
    else {
        // console.log('error'); //for testing whether running or not 
        cIcon.style.opacity = '0';
        paraCpsw.style.opacity = '1';
        paraCpsw.innerHTML = "must be matched with password";
        sbtBtn.style.zIndex = '-1';
        sbtBtn.style.opacity = '.2';
    }
});





