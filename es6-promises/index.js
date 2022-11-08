const takeAChance = require('./take-a-chance');

const result = takeAChance('Mitchell');

result.then(resolve => {
  console.log(resolve);
});
result.catch(error => {
  console.log(error.message);
});
