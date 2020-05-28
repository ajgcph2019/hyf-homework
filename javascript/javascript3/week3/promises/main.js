const userNames = ["benna100", "panivita", "LucyChyzhova"];

function createPromise(user) {
  return fetch(`https://api.github.com/search/repositories?q=user:${user}`);
}
const promises = [];

userNames.forEach(function (userName) {
  promises.push(createPromise(userName));
});
console.log(promises);
Promise.all(promises)
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
