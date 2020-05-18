// https://api.github.com/search/repositories?q=user:benna100
// https://api.github.com/search/repositories?q=user:panivita
// https://api.github.com/search/repositories?q=user:LucyChyzhova

const username = ["benna100", "panivita", "LucyChyzhova"];

// Lets use the github api to see what repositories different users have.
const username1 = "benna100";
const username2 = "panivita";
const username3 = "LucyChyzhova";

const promise1 = fetch(
  `https://api.github.com/search/repositories?q=user:${username1}`
);

const promise2 = fetch(
  `https://api.github.com/search/repositories?q=user:${username2}`
);

const promise3 = fetch(
  `https://api.github.com/search/repositories?q=user:${username3}`
);

Promise.all([promise1, promise2, promise3])
  .then((responses) =>
    Promise.all(responses.map((response) => response.json()))
  )

  .then((values) => values.forEach((list) => renderGitHubData(list)));

// When you have the data for the different repositories, render the fullname of the repo, url of the repo,
// and the owner of the repo.

function renderGitHubData(data) {
  const users = document.getElementById("users-repositories");
  const ownerOfTheRepo = document.createElement("h2");
  users.appendChild(ownerOfTheRepo);
  ownerOfTheRepo.textContent = data.items[0].owner.login;
  data.items.forEach((value) => {
    const ulTag = document.createElement("ul");
    ulTag.innerHTML = `
    <li> Name : ${value.name} </li>
    <li> URL : <a href =${value.html_url} >${value.html_url}</a></li>
    <li> Owner : ${value.owner.login} </li> `;
    users.appendChild(ulTag);
  });
}
