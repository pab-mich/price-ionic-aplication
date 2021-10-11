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

const clearInputs = () => {
  productName.value = '';
  productPrice.value= '';
}

buttonSave.addEventListener('click', () => {
  const name = productName.value;
  const price = productPrice.value;

  //for the validation
  if(price <= 0 || name == ''){
    alert("please! complete the inputs with correct values")
    return; // stop the code here!
  }

  createNewProduct(name, price)
  clearInputs()
})

buttonCancel.addEventListener('click', clearInputs )
