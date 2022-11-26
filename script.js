console.log("Don't Panic");

let users = [ 
    {id: 0, userName: "janne", password: "test"},
    {id: 1, userName: "mirr", password: "123"},
    {id: 3, userName: "cheri", password: "skinka"}
 ];

 let accounts = [];

const userNameInput = document.getElementById('userName');
const passwordInput = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const logout = document.getElementById('logout');

const signup = document.getElementById('signup');
const signUpBtn = document.getElementById('signUpBtn');
const newUser = document.getElementById('newUser');
const newPassword = document.getElementById('newPassword');

const demo = document.getElementById('demo');
logout.style.display = "none";

 // fungerade innan /;
 loginBtn.addEventListener('click', () => {
    console.log('klick på knapp');

    /* let userName = userName.value;
    localStorage.setItem("userName", userName); */

    let user = users.find(user => user.userName == userName.value); 
    console.log("janne", user)

     if (user.password == password.value) {
        console.log('hjälp-mig'); //loggas inte

       demo.innerText = 'Välkommen! Du är inloggad som: ' + userName.value;

       logout.style.display = ""; // logout-knappen dyker upp
       signup.style.display = 'none'; //singin försvinner

    } else {
       demo.innerText = 'Användarnamn eller lösenord stämmer inte ';
    } 
}); 
 

////////////////////////////////////////////////////
///////////////////////////////////////////////////
// FUNKTIONER!!

// LogoutBtn
logout.addEventListener('click', () => {
    demo.innerText = 'Du är nu utloggad ';
   // localStorage.removeItem("userName");
    logout.style.display = "none";
});

// för att spara nya användare:

signUpBtn.addEventListener('click', () => {
    console.log('klick på knapp');
    let newUser = {
        id: accounts.length + 1,
        user: user.value,
        password: password.value

    }
    console.log('det funkar', newUser); //loggas inte
    demo.innerText = 'Hope you like your new account, ' + user.value;

    accounts.push('new user account ', newUser);
});

/*  signUpBtn.addEventListener('click', () => {

    let newUser = newUser.value;
    let newPassword = newPassword.value;
    
    localStorage.setItem('userName', userName);
    localStorage.setItem('password', password);
    
});  */
