const user = document.getElementById('user');
const password = document.getElementById('password');
const saveUser = document.getElementById('saveUser');
const showtime = document.getElementById('showtime');

let accounts = [ ];

saveUser.addEventListener('click', () => {
    console.log('klick på knapp');
    let newUser = {
        id: accounts.length + 1,
        user: user.value,
        password: password.value

    };
    console.log('det funkar, noice', newUser); 
    showtime.innerText = 'Hello, you are logged in as: ' + user.value;

    accounts.push('new user account ', newUser);
});
