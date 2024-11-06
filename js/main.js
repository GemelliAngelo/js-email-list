const emailListEl = document.getElementById("email-list");
const buttonEl = document.querySelector("attribute=button");

const getEmails = () => {
  fetch("https://flynn.boolean.careers/exercises/api/random/mail").then(
    (response) =>
      response.json().then((data) => {
        emailListEl.innerHTML += `<li class="h2">${data.response}</li>`;
      })
  );
};

const printEmail = () => {
  for (let i = 0; i < 10; i++) {
    getEmails();
  }
};
