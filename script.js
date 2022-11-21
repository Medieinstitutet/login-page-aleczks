console.log("Don't Panic");

let users = [ {"userName": "janne", "password": "test"} ]

const loginBtn = document.getElementById('loginBtn');

// behöver kunna 'toggla' bort login-spannen vid knapptryck


// fungerar !!!!
loginBtn.addEventListener('click', () => {
    console.log('klick på knapp');

    let user = users.find(user => user.userName == userName.value); 
    console.log("janne", user)

    let pass = users.find(user => user.password == password.value); 
    console.log("test", pass)

    if (user && pass) {
        demo.innerHTML = "Du är janne ";
    } else {
        demo.innerHTML = "Du är inte janne ";   
    }
});



