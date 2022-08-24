function ExampleConstructor() {}

console.log('value of ExampleConstructor.prototype: ', ExampleConstructor.prototype);
console.log('typeof ExampleConstructor.prototype: ', typeof ExampleConstructor.prototype);

var newVariable = new ExampleConstructor();
console.log('newConstructor: ', newVariable);

var anotherVar = newVariable instanceof ExampleConstructor;
console.log('value of anotherVar: ', anotherVar);
