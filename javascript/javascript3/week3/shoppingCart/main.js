// Product represents products. ShoppingCart represents a shopping cart.

class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  convertToCurrencyWithApi(currency) {
    const apiUrl = `https://api.exchangeratesapi.io/latest?base=DKK`;
    return fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        return this.price * data.rates[currency];
      })
      .catch((err) => console.log(err));
  }
}
class ShoppingCart {
  constructor(products) {
    this.products = products;
  }

  addProduct(product) {
    // should add a product to the products array
    this.products.push(product);
  }

  removeProduct(product) {
    // should remove a product from the products array
    if (this.products.includes(product)) {
      const index = this.products.indexOf(product);
      this.products.splice(index, 1);
    }
  }

  searchProduct(productName) {
    // should return an array of product that match the productName parameter
    this.products.filter((product) => {
      if (product.name === productName) {
        return true;
      }
    });
  }

  getTotal() {
    // should get the total price of the products in the shoppingcart
    return this.products
      .map((product) => product.price)
      .reduce((sum, price) => sum + price, 0);
  }

  renderProducts() {
    // should render the products to html. You decide what to show and how
    // Also render the username and the total price of the products in the shoppingcart
    const newUl = document.createElement("ul");
    document.body.appendChild(newUl);
    for (let i = 0; i < this.products.length; i++) {
      const newLi = document.createElement("li");
      newLi.innerHTML = `${this.products[i].name}: ${this.products[i].price} DKK`;
      newUl.appendChild(newLi);
    }
  }

  renderTotalPrice() {
    const totalPriceDiv = document.createElement("div");
    document.body.appendChild(totalPriceDiv);
    totalPriceDiv.innerHTML = `Total price of the products: ${this.getTotal()} DKK`;
  }

  getUser() {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((response) => response.json())
      .then((userInfo) => {
        const userName = userInfo.username;
        const userInfoDiv = document.createElement("div");
        document.body.appendChild(userInfoDiv);
        userInfoDiv.innerHTML = `User name: ${userName}`;
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

const flatscreen = new Product("flat-screen", 5000);
const shoppingCart = new ShoppingCart([flatscreen]);
const mobile = new Product("mobile-phone", 1000);
const camera = new Product("camera", 3000);
const watch = new Product("watch", 500);
shoppingCart.addProduct(mobile);
shoppingCart.addProduct(camera);
shoppingCart.addProduct(watch);
shoppingCart.removeProduct(mobile);
shoppingCart.getUser();
shoppingCart.renderProducts();
shoppingCart.renderTotalPrice();
const plant = new Product("plant", 50);
plant.convertToCurrencyWithApi("INR").then((convertedValue) => console.log("Currency in INR ",convertedValue));


  
