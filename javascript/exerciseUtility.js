//Exercise 1
function controlInteger(a) {
  while (a != parseInt(a)) {
    if (a == parseFloat(a)) {
      a = prompt(`The value given was not an integer, retry`);
    } else {
      a = prompt(`The value given was not a number, retry`);
    }
  }
  return Number(a);
}
function send(text, times) {
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
  let product = prompt(
    `Insert a product you want to add to your shopping list`
  ).toLowerCase();
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
  let product = prompt(
    `Insert a product you want to remove from your shopping list`
  ).toLowerCase();
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
    case `YES`:
      return true;
    case `NO`:
      return false;
    default:
      alert(`I'll take that as a no`);
      return false;
  }
}

//Exercise 4
function addElementTo(shoppingDict) {
  let element = prompt(
    `Insert the name of the element you want to add to your shopping list`
  ).toLowerCase();
  let quantity = prompt(`Insert how many you want to add`);
  quantity = controlInteger(quantity);
  if (element in shoppingDict) {
    shoppingDict[element] += quantity;
  } else {
    shoppingDict[element] = quantity;
  }
  alert(`${quantity} ${element} were successfully added to your shopping list`);
}
function removeElementFrom(shoppingDict) {
  let element = prompt(
    `Insert the name of the element you want to remove from your shopping list`
  ).toLowerCase();
  if (element in shoppingDict) {
    let quantity = prompt(`Insert how many you want to remove`);
    quantity = controlInteger(quantity);
    shoppingDict[element] -= quantity;
    if (shoppingDict[element] < 0) delete shoppingDict[element];
    alert(
      `${quantity} ${element} were successfully removed from your shopping list`
    );
  } else {
    alert(`${element} is not in your shopping list`);
  }
}

// Exercise 5
function send(data, dataList) {
  value = document.getElementById(data).value;
  if (value == "" || value.replaceAll(" ", "") == "") {
    dataList.innerHTML = "";
    document.getElementById("welcome").hidden = true;
    alert(
      "At least one of the fields was left empty, fill all of them to submit"
    );
    return false;
  } else {
    let info = document.createElement(`li`);
    info.innerHTML = `${data}: ${value}`;
    dataList.appendChild(info);
    document.getElementById("welcome").hidden = false;
    return true;
  }
}

//Exercise 6
async function getMealFrom(mealName) {
  let req = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`
  );
  let meals = await req.json();
  return meals.meals;
}
async function display(meals) {
  meals = await meals;
  main = document.getElementById("main");
  for (let i=0; i<meals.length; i++) {
    let dish = document.createElement("h1");
    let img = document.createElement("img");
    let instructions = document.createElement("p");

    dish.innerHTML = `${meals[i].strMeal} [${meals[i].strArea}]`;
    img.src = meals[i].strMealThumb;
    img.width = 300;
    img.height = 200;
    instructions.innerHTML = meals[i].strInstructions;

    main.appendChild(dish);
    main.appendChild(img);
    main.appendChild(instructions);
  }
}

//Exercise 7
async function getCondition(city) {
  req = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=NOKEY&q=${city}&aqi=no`
  );
  reqJson = await req.json();
  return reqJson.current.condition;
}
async function showCondition(condition, res) {
  condition = await condition;
  res.innerHTML += `<h4>${condition.text}</h4>`;
  res.innerHTML += `<img src=${condition.icon}>`;
}
