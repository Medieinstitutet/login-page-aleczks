console.log("Don't Panic");

const loginBtn = document.getElementById('loginBtn');
const signUpBtn = document.getElementById('signUpBtn');

let userName = document.getElementById('userName');
let password = document.getElementById('password');

// sidan ska kunna spara användarna i localStorage

const users = [ 
    {"userName": "janne", "password": "test"},
    {"userName": "alex", "password": "test1"},
    {"userName": "cheri", "password": "skinka"},
    {"userName": "leon", "password": "btc"}
 ]

 // FÖR ATT KOLLA OM ETT NAMN FINNS
 if (localStorage.getItem('userName')) {
    printUserName();
 } else {
    printUserDoesNotExist();
 };

// behöver kunna få bort login-rutan vid knapptryck

// ännu ej fungerande kod för flera användare 
 
loginBtn.addEventListener('click', () => { 

    for (user in users.length) {

    let user = users.find(user => user.userName == password.value); 
    console.log("janne", user) // loggas inte

    let pass = users.find(user => user.password == userName.value); 
    console.log("test", pass) // loggas inte

    if (user && pass) {
        demo.innerHTML = "Välkommen tillbaka " + user;
    } else {
        demo.innerHTML = "Användaren finns inte ";   
    }

        if(userName == users[i].userName && password == users[i].password) {
            console.log('Klick på knapp'); //loggas ej
    
            demo.innerText = "Du är nu inloggad som " + userName; 
        } else {
            demo.innerText = "Användaren finns inte ";
        }
      }
    });


// ska försöka lägga till fler användare (VG type shi)
// FÅNGA NYTT ANVÄNDARNAMN OCH SPARA I LS
signUpBtn.addEventListener('click', () => {
    
    let newUser = newUser.value;
    let newPassword = newPassword.value;
    console.log('Vart är min variabel '); // loggas ej
    localStorage.setItem('userName', userName);

    // FÖRKORTNING: localStorage.setItem('userName', userName.value);
    function printUserName() // ännu inte färdig
    
});

function printUserName() {
    // HÄMTA ANVNAMN FRÅN LS OCH SKRIV UT PÅ SIDAN
    let userName = localStorage.getItem('userName');
    demo.innerText = 'Du är ' + userName;



}
// TO DO: skapa en logout-button
let logoutBtn = document.createElement('button')
logoutBtn.innerText = 'Logga ut';
logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('userName');
    printUserDoesNotExist();
})
demo.appendchild(logoutBtn);

function printUserDoesNotExist() {
    // SKRIV ATT ANV INTE FINNS
    demo.innerText = "Användaren finns inte xd "; 
}


// pusha newUser till 'users'-array ?