let inputName = document.querySelector(".name");
let inputPassword = document.querySelector(".password");
let inputPhone = document.querySelector(".phone");
let inputEmail = document.querySelector(".email");
let signBtn = document.querySelector(".button-sign");
let logInBtn = document.querySelector(".button-logIn");
let reqMessage = document.createElement("p");
let reqMessageLogIn = document.createElement("p");
let boxSignUp = document.querySelector(".sign-up");
let boxLogIn = document.querySelector(".log-in");

let inputEmailLogIn = document.querySelector(".email-logIn");
let inputPasswordLogIn = document.querySelector(".password-logIn");

boxSignUp.append(reqMessage);
boxLogIn.append(reqMessageLogIn);

let users =
  localStorage.getItem("users") === null
    ? []
    : JSON.parse(localStorage.getItem("users"));

function clearInputs() {
  inputName.value = "";
  inputPassword.value = "";
  inputPhone.value = "";
  inputEmail.value = "";
}

signBtn.addEventListener("click", () => {
  if (
    inputName.value === "" ||
    inputPassword.value === "" ||
    inputPhone.value === "" ||
    inputEmail.value === ""
  ) {
    reqMessage.innerText = "Введите текст";
    reqMessage.style.color = "red";
  } else {
    let isError = false;

    for (let i = 0; i < users.length; i++) {
      if (inputEmail.value === users[i].email) {
        isError = true;
        break;
      }
    }

    if (isError) {
      reqMessage.innerHTML = "Такой gmail есть";
      reqMessage.style.color = "darkgreen";
    } else {
      const userData = {
        name: inputName.value,
        password: inputPassword.value,
        phone: inputPhone.value,
        email: inputEmail.value,
      };

      users.push(userData);

      localStorage.setItem("users", JSON.stringify(users));

      clearInputs();

      reqMessage.innerText = "вы зарегистрировались";
      reqMessage.style.color = "green";
    }
  }
});

// ===================LOG IN=======================

logInBtn.addEventListener("click", () => {
  console.log(inputEmailLogIn, inputPasswordLogIn);
  if (inputEmailLogIn.value === "" || inputPasswordLogIn.value === "") {
    reqMessageLogIn.innerText = "Введите текст";
    reqMessageLogIn.style.color = "red";
  } else {
    let isErrorLogIn = false;

    for (let i = 0; i < users.length; i++) {
      if (
        inputEmailLogIn.value === users[i].email ||
        inputPasswordLogIn.value === users[i].password
      ) {
        isErrorLogIn = true;
        break;
      }
    }

    if (isErrorLogIn) {
      reqMessageLogIn.innerHTML = "Такой gmail или пароль уже есть";
      reqMessageLogIn.style.color = "darkgreen";
    } else {
      clearInputs();

      reqMessageLogIn.innerText = "вы вошли";
      reqMessageLogIn.style.color = "green";
    }
  }
});
