const productName = document.querySelector("#productName");
const productPrice = document.querySelector("#productPrice");
const buttonSave = document.querySelector("#button-save");
const buttonCancel = document.querySelector("#button-clear");
const productList = document.querySelector("#product-list");
const totalOuput = document.querySelector("#total");

let total = 0;

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

//alert ionic component
const presentAlert = () => {
  const alert = document.createElement('ion-alert')
  alert.header = 'invalid data';
  alert.subHeader = 'please veryfy the inputs'
  alert.message = 'incorrect name or price'
  alert.buttons = ['ok'];

  document.body.appendChild(alert);
  return alert.present() // with the method present the ion-lert is in the html body
}

buttonSave.addEventListener('click', () => {
  const name = productName.value;
  const price = productPrice.value;

  //for the validation
  if(price <= 0 || name == ''){
    presentAlert()
    return; // stop the code here!
  }

  createNewProduct(name, price)
  total += +price; //+ before price=> change the string for number
  totalOuput.textContent = total;

  clearInputs()
})

buttonCancel.addEventListener('click', clearInputs )
