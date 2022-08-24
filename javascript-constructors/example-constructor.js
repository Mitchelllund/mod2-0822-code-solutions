function ExampleConstructor() {}
console.log('value of ExampleConstructor.prototype: ', ExampleConstructor.prototype);
console.log('value of typeof ExampleConstructor.prototype: ', typeof ExampleConstructor.prototype);

var newVar = new ExampleConstructor();
console.log('newVar value: ', newVar);

var anotherVar = newVar instanceof ExampleConstructor;
console.log('anotherVar value: ', anotherVar);
