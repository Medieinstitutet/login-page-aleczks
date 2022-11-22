console.log("Don't Panic");

const loginBtn = document.getElementById('loginBtn');
const signUpBtn = document.getElementById('signUpBtn');
const userName = document.getElementById('userName');
const password = document.getElementById('password');

const users = [ 
    {"userName": "janne", "password": "test"},
    {"userName": "alex", "password": "test1"},
    {"userName": "leon", "password": "btc"}
 ]

// behöver kunna få bort login-rutan vid knapptryck
 
loginBtn.addEventListener('click', () => { 
    console.log('klick på knapp ');

    let user = users.find(user => users.userName == userName.value); 
    console.log("janne", user) // loggas inte, 'undefined'

    let pass = users.find(pass => users.password == password.value); 
    console.log("test", pass) // loggas inte, 'undefined'

    if (user && pass) {
        demo.innerHTML = "Du är inloggad som Janne";
    } 
    else {
        demo.innerHTML = "Användaren finns inte ";
  }
 }
);


// FÅNGA NYTT ANVÄNDARNAMN OCH SPARA I LS

 // FÖR ATT KOLLA OM ETT NAMN FINNS
/*  if (localStorage.getItem('userName')) {
    printUserName();
 } else {
    printUserDoesNotExist();
 };
 */

/* function printUserName() {
    // FUNKTION FÖR ATT HÄMTA ANVNAMN FRÅN LS OCH SKRIVA UT PÅ SIDAN
    let userName = localStorage.getItem('userName');
    demo.innerText = 'Du är ' + userName;
}; */

// TO DO: skapa en logout-button
let logoutBtn = document.createElement('button')
logoutBtn.innerText = 'Logga ut';
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('userName');
    printUserDoesNotExist();
});
demo.appendchild(logoutBtn);

function printUserDoesNotExist() {
    // SKRIV UT ATT ANV INTE FINNS
}

signUpBtn.addEventListener('click', () => {
    addNewUser(); 
})

// FÖRSLAG TILL MULTIPLE USERS-PROBLEMET:
/* if(userName == users[i].userName && password == users[i].password) {
            console.log('Klick på knapp'); //loggas ej
    
            demo.innerText = "Du är nu inloggad som " + userName; 
            signup.document.display(none); // ngt sånt
        } else {
            demo.innerText = "Användaren finns inte ";
        } */

        // signup.document.display(none); // ngt sånt för knapp


         // VG FEATURE FÖR ATT LÄGGA TILL NYA ANVÄNDARE 
/* signUpBtn.addEventListener('click', () => {
    
    let newUser = newUser.value;
    let newPassword = newPassword.value;
    console.log('Vart är min variabel '); // loggas ej
    localStorage.setItem('userName', userName);

    // FÖRKORTNING: localStorage.setItem('userName', userName.value);
    function printUserName() // ännu inte färdig
    
}); 
*/