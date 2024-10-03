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
