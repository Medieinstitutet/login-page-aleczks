console.log("Don't Panic");

//LADES TILL EFTER SENASTE FUNGERANDE COMMIT
// if-else för ls
if(localStorage.getItem('users')) { //varför är '!' vit?
    let users = [ 
        {id: 0, userName: "janne", password: "test"},
        {id: 1, userName: "mirr", password: "123"},
        {id: 2, userName: "cheri", password: "skinka"}
     ]
    localStorage.setItem('users', JSON.stringify(users));
 } 

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

    //LADES TILL EFTER SENASTE FUNGERANDE COMMIT
    let users = JSON.parse(localStorage.getItem('users')); //här kom felmeddelandet

    let user = users.find(user => user.userName === userNameInput.value); 
    console.log("janne", user) // loggas inte heller

     if (user.password === passwordInput.value) {
        console.log('hjälp-mig'); //loggas inte

        //LADES TILL EFTER SENASTE FUNGERANDE COMMIT
        let loggedInUser = userNameInput.value;
        localStorage.setItem('loggedInUser', loggedInUser);

        printUserName();

    } else {
       userDoesNotExist();
    } 
}); 
 



///////////////////////////////////////////////////
// FUNKTIONER!!
function printUserName() {
    console.log('test printUserName'); // nej

    //NY RAD FRÅN SENASTE COMMIT
    let loggedInUser = localStorage.getItem('loggedInUser');

    demo.innerText = 'Välkommen! Du är inloggad som: ' + loggedInUser + ' '; //NY

    // skapar en logga-ut-knapp
    let logoutBtn = document.createElement("button")
    logoutBtn.innerText = "Logga ut!";
    demo.appendChild(logoutBtn);

    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedInUser"); //NY 
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
    // NY
    let users = JSON.parse(localStorage.getItem('users'));

    let newUser = {
        id: users.length + 1,
        userName: newUserName.value,
        password: newPassword.value

    }
    console.log('det funkar', newUser); 
    demo.innerText = 'Grattis till ditt nya medlemsskap! ' + 
    ' Prova att logga in nu, ' + newUser.userName + ' ;) ';

    users.push(newUser);
    // NY
    localStorage.setItem('users', JSON.stringify(users));
});