console.log("Script loaded");
const availableProducts = getAvailableProducts();


// function renderProducts(products) {
//   const ulTag = document.querySelector("section.products > ul ");

//   for (let i = 0; i < products.length; i++) {
//     const currentProduct = products[i]; //currentproduct is an object
//     const liTag = document.createElement("li");
//     liTag.innerHTML = currentProduct.name; //returning an object property

//     // ulTag.appendChild(liTag);

//     // Showing more details to the user in a nice way
//     const productDetails = document.createElement("ul");
//     const productDetailsList1 = document.createElement("li");
//     const productDetailsList2 = document.createElement("li");
//     const productDetailsList3 = document.createElement("li");
//     const productDetailsList4 = document.createElement("li");

//     productDetailsList1.innerHTML = currentProduct.name;
//     productDetailsList2.innerHTML = currentProduct.price;
//     productDetailsList3.innerHTML = currentProduct.rating;
//     productDetailsList4.innerHTML = "ships-To";

//     ulTag.appendChild(productDetails);
//     productDetails.appendChild(productDetailsList1);
//     productDetails.appendChild(productDetailsList2);
//     productDetails.appendChild(productDetailsList3);
//     productDetails.appendChild(productDetailsList4);
//     const subUlTag = document.createElement("ul");
//     productDetailsList4.appendChild(subUlTag);

//     currentProduct.shipsTo.forEach(country => {
//       const shipToLi = document.createElement("li");
//       shipToLi.innerHTML = country;
//       subUlTag.appendChild(shipToLi);
//     });
//   }
// }
const productsUl = document.querySelector('section.products > ul');
console.log(productsUl);

function renderProducts(products) {
  products.forEach(product => {
      const li = document.createElement('li');

      let shipsToHTML = '';
      product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

      li.innerHTML = `
          <ul>
              <li>${product.name}</li>
              <li>${product.price}</li>
              <li>${product.rating}</li>
              <ul class="ships-to">${shipsToHTML}</ul>
          </ul>
      `
      productsUl.appendChild(li);
  });
}
renderProducts(availableProducts);

//Search product


 const inputTag = document.querySelector('input');
 inputTag.addEventListener('change',updateValue);


 function updateValue(event) {

    const item = document.querySelector('input').value;
    const filteredProduct = availableProducts.filter(element => element.name.includes(item));
  
       renderProducts(filteredProduct);
 }

 // Showing products that ships to country

 const dropDownValue = document.querySelector('.country > select');
 dropDownValue.addEventListener('change',function() {

    const result = dropDownValue.options[dropDownValue.selectedindex].value;

        const returnProducts = availableProducts.filter(element => element.shipsTo.includes(result));
         renderProducts(returnProducts);
    });

//Sort the products - optional
const sortSelected = document.querySelector('.sort > select');
sortSelected.addEventListener('change', function() {
    const valueSorted = sortSelected.options[sortSelected.selectedIndex].value;
    if (valueSorted === 'cheap') {
        const sortCheapProducts = availableProducts.sort((a, b) => a.price - b.price);
        renderProducts(sortCheapProducts);
    } if (valueSorted === 'expensive') {
        const sortExpensiveProducts = availableProducts.sort.sort((a, b) => b.price - a.price);
        renderProducts(sortExpensiveProducts);
    } if (valueSorted === 'name') {
        const sortNameProducts = availableProducts.sort.sort((a, b) => {
            const nameA = a.name.toUpperCase(); // ignore upper and lowercase
            const nameB = b.name.toUpperCase();
            if (nameA < nameB) {
                return -1;
            }
            if (nameA > nameB) {
                return 1;
            }
            return 0;
        });
        renderProducts(sortNameProducts);
    }
});

//Extra Feature
  //Add an extra field quantity and calculate price accordingly
  
  function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');
  
        let quantity = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);
  
        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `
        productsUl.appendChild(li);
    });
  }
  renderProducts(availableProducts);
  
   
