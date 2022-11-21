console.log("Don't Panic");

const loginBtn = document.getElementById('loginBtn');
const signUpBtn = document.getElementById('signUpBtn');

// sidan ska kunna spara användarna i localStorage
// pusha newUser till 'users'-array(?)

const users = [ 
    {"userName": "janne", "password": "test"},
    {"userName": "Alecz", "password": "festar"},
    {"userName": "cheri", "password": "skinka"},
    {"userName": "Leon", "password": "btc"}
 ]
// ska försöka lägga till fler användare (VG type shi)

signUpBtn.addEventListener('click', () => {
    let newUser = document.getElementById('newUser').value;
    let newPassword = document.getElementById('newPassword').value;

for(i = 0; i < users.length; i++) {
    if(newUser == users[i].userName && newPassword == users[i].password) {
        demo.innerHTML = "Du är inloggad som " + userName; 
    } else {
        demo.innerHTML = "Användaren finns inte xd"
    }
  }
});

// behöver kunna få bort login-rutan vid knapptryck
// behöver kunna lägga till en logga-ut-knapp: CreateElement


// fungerar !!!!
loginBtn.addEventListener('click', () => {
    console.log('klick på knapp');

    let user = users.find(user => user.userName == userName.value); 
    console.log("janne", user)

    let pass = users.find(user => user.password == password.value); 
    console.log("test", pass)

    if (user && pass) {
        demo.innerHTML = "Välkommen, janne ";
        //ta bort login-rutan
    } else {
        demo.innerHTML = "Du är inte janne ";   
    }
});



