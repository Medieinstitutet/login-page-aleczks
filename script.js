console.log("Don't Panic");

let users = [ 
    {id: 0, userName: "janne", password: "test"},
    {id: 1, userName: "mirr", password: "123"},
    {id: 3, userName: "cheri", password: "skinka"}
 ];

// hämtar element från login-rutan
const userNameInput = document.getElementById('userNameInput');
const passwordInput = document.getElementById('passwordInput');
const loginBtn = document.getElementById('loginBtn');

// hämtar element från signup-rutan
// const signup = document.getElementById('signup');
const signUpBtn = document.getElementById('signUpBtn');
const newUserName = document.getElementById('newUserName');
const newPassword = document.getElementById('newPassword');

// div som skriver ut meddelanden på sidan
const demo = document.getElementById('demo');

 // fungerar
 loginBtn.addEventListener('click', () => {
    console.log('klick på knapp'); //loggas ut iaf

    let user = users.find(user => user.userName === userNameInput.value); 
    console.log("janne", user) // loggas inte heller

     if (user.password === passwordInput.value) {
        console.log('hjälp-mig'); //loggas inte
        printUserName();

    } else {
       userDoesNotExist();
    } 
}); 
 



///////////////////////////////////////////////////
// FUNKTIONER!!
function printUserName() {
    console.log('test printUserName'); // nej
    demo.innerText = 'Välkommen! Du är inloggad som: ' + userNameInput.value;

    // skapar en logga-ut-knapp
    let logoutBtn = document.createElement("button")
    logoutBtn.innerText = "Logga ut!";
    demo.appendChild(logoutBtn);

    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("userName");
      demo.innerText = 'Du är nu utloggad ';
    })
}

function userDoesNotExist() {
    console.log('test userDoesNotExist'); 
    demo.innerText = 'Användarnamn eller lösenord stämmer inte ';
}


// för att spara nya användare:
signUpBtn.addEventListener('click', () => {
    console.log('klick på knapp'); 

    let newUser = {
        id: users.length + 1,
        userName: newUserName.value,
        password: newPassword.value

    }
    console.log('det funkar', newUser); 
    demo.innerText = 'Hope you like your new account, ' + newUser.userName;

    users.push(newUser);
    console.log('users after push', users);
});

