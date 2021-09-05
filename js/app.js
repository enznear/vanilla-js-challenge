const loginForm = document.querySelector("#login-form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");
const greeting = document.querySelector("#greeting");

// function onLoginBtnClick(){
//     const value = loginInput.value;
//     if(value === ""){
//         console.log("Please write your name");
        
//     }
//     console.dir(loginInput.value);
//     console.log("click");
// }

// loginButton.addEventListener("click", onLoginBtnClick);

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSummit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);  
}

loginForm.addEventListener("submit", onLoginSummit);

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSummit);
} else {
    paintGreetings(savedUsername);
}

// const player = {
//     name: "nico",
//     points: 10,
//     fat: true,
// };

// function sayHello(nameOfPerson) {
//     console.log(nameOfPerson)

// }

// sayHello("Yong");

// const a = 5;
// let isNicoFat = true;

// const player1 = {
//     name: "aa",
//     age: 98,
// };

// const h1 = document.querySelector("div.hello:first-child h1");

// function handleTitleClick() {   
//     h1.classList.toggle("clicked");
// }

// h1.addEventListener("click", handleTitleClick);