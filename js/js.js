const buttons1 = document.getElementsByClassName('button');
const buttonLinks1 = document.getElementsByClassName('button-link');

var buttons2 = [];
var i = 0;
for (let button of buttons1) {
  if (!(i == 3)) {
    buttons2.push(button);
  }
  i += 1;
}

var buttonLinks2 = [];
for (let buttonLink of buttonLinks1) {
  buttonLinks2.push(buttonLink);
}

buttons2.forEach((button, i) => {
  var buttonLink = buttonLinks2[i];

  button.addEventListener('click', () => {
    buttonLink.click();
  });
});

const button4 = document.getElementById('button4');
const shop = document.getElementById('shop');

var button4State = false;

button4.addEventListener('click', () => {
  if (button4State) {
    button4State = false;
    button4.style.height = '';
    shop.style.display = 'none';
  } else {
    button4State = true;
    button4.style.height = '6.4rem';
    shop.style.display = 'flex';
  }
});
