let inputName = document.getElementById("inputName");
let saveNameBtn = document.getElementById("saveNameBtn");
let showName = document.getElementById("showName");

// KOLLA OM DET FINNS ETT NAMN, OM TRUE:
// KALLA PÅ PRINT OM FALSE KALLA PÅ UNKNOWN
if (localStorage.getItem("userName")) {
    printName();
} else {
    userDoesNotExist();
};

saveNameBtn.addEventListener("click", () => {
    // FÅNGA SKRIVER NAMN OCH SPARA I LS
    let userName = inputName.value;
    console.log("userName i Event Listener", userName);
    localStorage.setItem("userName", userName);
    printName();
});

function printName() {
    // HÄMTA NAMNET FRÅN LS OCH SKRIV UT PÅ SIDAN
    let userName = localStorage.getItem("userName");
    showName.innerText = "You are logged in as: " + userName + " ";

 /*    // SKAPA OCH SKRIV UT EN LOGGA-UT-KNAPP

    let forgetButton = document.createElement("button")
    forgetButton.innerText = "Log Out!";
    forgetButton.addEventListener("click", () => {
        localStorage.removeItem("userName");
        userDoesNotExist();
    })
    showName.appendChild(forgetButton);

}

function userDoesNotExist() {
    // SKRIV UT ATT VI INTE HAR ETT NAMN SPARAT
    showName.innerText = "This user does not exist"
} */  }