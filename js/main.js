const emailListEl = document.getElementById("email-list");
const generatebuttonEl = document.getElementById("generate-button");
const deletebuttonEl = document.getElementById("delete-button");

const getEmails = () => {
  fetch("https://flynn.boolean.careers/exercises/api/random/mail").then(
    (response) =>
      response.json().then((data) => {
        emailListEl.innerHTML += `<li class="h2 p-3 border bg-secondary">${data.response}</li>`;
      })
  );
};

const printEmail = () => {
  emailListEl.innerHTML = "";
  for (let i = 0; i < 10; i++) {
    getEmails();
  }
};

generatebuttonEl.addEventListener("click", printEmail);
deletebuttonEl.addEventListener("click", () => (emailListEl.innerHTML = ""));
