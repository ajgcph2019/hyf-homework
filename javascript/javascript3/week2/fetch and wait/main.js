/* Fetch some data from an api.
After that data has been fetched, wait 3 seconds
Log out the data from the api */

const astronautsUrl = "http://api.open-notify.org/astros.json";
fetch(astronautsUrl)
  .then((response) => response.json())
  .then((data) => {
    setTimeout(() => {
      console.log(data);
    }, 3 * 1000);
  });

//using async and await method:

async function fetchDetailsAndWait() {
  const response = await fetch(astronautsUrl);
  const list = await response.json();
  setTimeout(() => {
    console.log(list);
  }, 3 * 1000);
}

try {
  fetchDetailsAndWait();
} catch (err) {
  console.log(err);
}
