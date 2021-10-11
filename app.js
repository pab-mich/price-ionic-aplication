const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const buttonSave = document.querySelector("#button-save");
const buttonCancel = document.querySelector("#button-clear");
const productList = document.querySelector("#product-list");

const createNewProduct = (name, price) => {
  const ionCard = document.createElement('ion-card');
  const newProdcutItem = document.createElement('ion-card-content');
  newProdcutItem.textContent = name + ': $' + price;
  ionCard.appendChild(newProdcutItem);
  productList.appendChild(ionCard);
}

buttonSave.addEventListener('click', () => {
  const name = productName.value;
  const price = productPrice.value;
  createNewProduct(name, price)
})
