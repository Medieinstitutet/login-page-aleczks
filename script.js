console.log("Don't Panic");

let users = [ 
    {id:0, userName: "janne", password: "test"},
    {id:1, userName: "alex", password: "123"},
    {id:2, userName: "leon", password: "btc"},
    {id:3, userName: "cheri", password: "skinka"},
 ]

 localStorage.getItem('users'); {
    console.log('localStorage works');
} 
localStorage.setItem("users", JSON.stringify(users));
    console.log("ls yes");
    
// const container = document.getElementById('loginContainer');
const loginBtn = document.getElementById('loginBtn');
const userNameInput = document.getElementById('userName');
const newPasswordInput = document.getElementById('password');

const signupForm = document.getElementById('signupForm');
const signUpBtn = document.getElementById('signUpBtn');
const newUser = document.getElementById('newUserInput');
const newPassword = document.getElementById('newPasswordInput');

const demo = document.getElementById('demo');
logout.style.display = "none";

// TO DO: skriv funktion för att spara users[ ] i LS
if (localStorage.getItem('userName')) {
    printUserName();
 } else {
    printUserDoesNotExist();
 };


// LÖS: spara användare i localStorage
 signUpBtn.addEventListener('click', () => {
    console.log('klick på knapp '); // loggas ej

    let newUserInput = newUser.value;
    let newPasswordInput = newPassword.value;
    
    localStorage.setItem('userName', userName);
    localStorage.setItem('password', password);
    
}); 

 // fungerar !!!! 
 loginBtn.addEventListener('click', () => {
    console.log('klick på knapp');

    let user = users.find(user => user.userName == userName.value); 
    console.log("janne", user)

     if (user.password == password.value) {
       printUserName();
       logout.style.display = "";
    } else {
       printUserDoesNotExist();
    } 
}); 
 

/////////////////////////////////////////////////////
////////////////////////////////////////////////////
///////////////////////////////////////////////////
// FUNKTIONER!!

function loginStatus() {
    localStorage.getItem("userName"); }

loginStatus();

// Log out function 
logoutSession = () => {   
    localStorage.removeItem("loginSession"); }

logoutBtn.addEventListener('click', () => {
    demo.innerHTML = 'Du är utloggad ';

    logoutSession();
});
demo.appendchild(logoutBtn);





function printUserName() {
  //  let userName = localStorage.getItem('userName');
    demo.innerHTML = 'Välkommen! Du är inloggad som: ' + userName.value; //hämta value från LS ist
}; 
function printUserDoesNotExist() {
    demo.innerHTML = 'Användarnamn eller lösenord stämmer inte ';
};

/* signUpBtn.addEventListener('click', () => {
    newUser(); 
}); */

