//Create a function that has one parameter: resolveAfter.
//Calling this function will return a promise that resolves after the resolveAfter seconds has passed.

function createPromise(resolveAfter) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`I am logged asynchronously after ${resolveAfter} seconds`);
    }, resolveAfter * 1000);
  });
}

createPromise(4).then((response) => console.log(response));
createPromise(5).then((response) => console.log(response));
// logged out after 8 seconds

//When you have written the promise, use it with async/await

//When I used timeout only,output came quick..had forgot to put in ms by multiplying with 1000

//with async and await

async function getPromiseAsync() {
  try {
    const data = await createPromise(5);
    //   console.log('Testing async function ${data}');  the wrong quotes selected for string literals,back-tick required
    console.log(`Testing async function ${data}`);
  } catch (error) {
    console.log("Error", error);
  }
}
getPromiseAsync();
