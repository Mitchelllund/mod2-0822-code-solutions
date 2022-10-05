const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = process.argv[2];
const y = process.argv[4];
const exp = process.argv[3];

if (exp === 'plus') {
  var result = add(x, y);
} else if (exp === 'minus') {
  result = subtract(x, y);
} else if (exp === 'times') {
  result = multiply(x, y);
} else if (exp === 'over') {
  result = divide(x, y);
}

console.log('result:', result);
