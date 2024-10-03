//Exercise 1
function control(a) {
  while (a != parseInt(a)) {
    if (a == parseFloat(a)) {
      a = prompt(`The value given was not an integer, retry`);
    } else {
      a = prompt(`The value given was not a number, retry`);
    }
  }
  return a;
}
function display(text, times) {
  for (let i = 0; i < times; i++) {
    console.log(text);
  }
}

//Exercise 2
function isNumerical(a) {
  while (a != parseInt(a) || a != parseFloat(a)) {
    if (String(a).toUpperCase() == `EXIT`) break;
    a = prompt(`The value given was not a number, retry`);
  }
  return a;
}

//Exercise 3
function addProductTo(shoppingList) {
  let product = prompt(`Insert a product you want to add to your shopping list`).toLowerCase();
  if (shoppingList.includes(product)) {
    console.log(shoppingList);
    alert(`${product} is already in your shopping list`);
  } else {
    shoppingList.push(product);
    console.log(shoppingList);
    alert(`${product} was successfully added to your shopping list`);
  }
}
function removeProductFrom(shoppingList) {
  let product = prompt(`Insert a product you want to remove from your shopping list`).toLowerCase();
  if (shoppingList.includes(product)) {
    i = shoppingList.indexOf(product);
    shoppingList.splice(i, 1);
    console.log(shoppingList);
    alert(`${product} was successfully removed from your shopping list`);
  } else {
    console.log(shoppingList);
    alert(`${product} is not in your shopping list`);
  }
}
function check() {
  switch (String(prompt(`Do you want to keep going?`)).toUpperCase()) {
    case "YES":
      return true;
    case "NO":
      return false;
    default:
      alert(`I'll take that as a no`);
      return false;
  }
}