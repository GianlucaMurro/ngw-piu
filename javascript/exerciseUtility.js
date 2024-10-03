//Exercise 1
function control(a) {
  while (a != parseInt(a)) {
    if (a == parseFloat(a)) {
      a = prompt("The value given was not an integer, retry");
    } else {
      a = prompt("The value given was not a number, retry");
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
    if (String(a).toUpperCase() == "EXIT") break;
    a = prompt("The value given was not a number, retry");
  }
  return a;
}