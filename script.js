// hämtar element från login-rutan
const userNameInput = document.getElementById('userNameInput');
const passwordInput = document.getElementById('passwordInput');
const loginBtn = document.getElementById('loginBtn');

// hämtar element från signup-rutan
const signUpBtn = document.getElementById('signUpBtn');
const newUserName = document.getElementById('newUserName');
const newPassword = document.getElementById('newPassword');

// div som skriver ut meddelanden på sidan
const demo = document.getElementById('demo');

if(localStorage.getItem('users')) {
    console.log('');
} else {
    let users = [ 
        {id: 0, userName: "janne", password: "test"},
        {id: 1, userName: "mirr", password: "123"},
        {id: 2, userName: "cheri", password: "skinka"}
     ]
    localStorage.setItem('users', JSON.stringify(users));
}

if(localStorage.getItem('loggedInUser')) {
    printUserName();
}

 loginBtn.addEventListener('click', () => {
    let users = JSON.parse(localStorage.getItem('users'));
    let user = users.find(user => user.userName === userNameInput.value && user.password === passwordInput.value); 
  //  console.log("janne", user)

     if (user) {

        let loggedInUser = userNameInput.value;
        localStorage.setItem('loggedInUser', loggedInUser);

        printUserName();

    } else {
       userDoesNotExist();
       console.log('vill inte visa sig');
    } 
}); 

//////////////
// FUNKTIONER
function printUserName() {

    let loggedInUser = localStorage.getItem('loggedInUser');
    demo.innerText = 'Välkommen! Du är inloggad som: ' + loggedInUser + ' ';

    container.style.display = 'none';
    signup.style.display = 'none';

    // skapar en logga-ut-knapp
    let logoutBtn = document.createElement("button")
    logoutBtn.innerText = "Logga ut!";
    demo.appendChild(logoutBtn);

    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedInUser"); 
      demo.innerText = 'Du är nu utloggad ';
      container.style.display = 'block';
        signup.style.display = 'block';
    })
}

function userDoesNotExist() {
    demo.innerText = 'Användarnamn eller lösenord stämmer inte ';
}

// för att spara nya användare:
signUpBtn.addEventListener('click', () => {
   // console.log('klick på knapp'); 
    let users = JSON.parse(localStorage.getItem('users'));

    let newUser = {
        id: users.length + 1,
        userName: newUserName.value,
        password: newPassword.value

    }
 //   console.log('det funkar', newUser); 
    demo.innerText = 'Grattis till ditt nya medlemsskap! ' + 
    ' Prova att logga in nu, ' + newUser.userName + ' ;) ';

    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
});
