// ES5
const square = function(x) {
  return x * x;
};

console.log(square(3));

const squareArrow = (x) => {
  return x * x;
};
console.log(squareArrow(9));

const squareArrowTwo = (x) => x * x;
console.log(squareArrowTwo(81));

const firstName = (firstName) => {
  return firstName.split(' ')[0];
};

const getFirstName = (fullName) => fullName.split(' ')[0]
console.log(getFirstName('Esmaeil MIRZAEE'))