/* When used as object properties, functions are called methods. Inside a method defined using a function() {} syntax
have access to the current object by referencing 'this'. 

Don’t have access to 'this' with arrow function because arrow functions are not bound to the object. 
For object methods regular functions are the way to go.

let car = {
  brand: 'Ford',
  model: 'Fiesta',
  start: () => {
    console.log(`Started ${this.brand} ${this.model}`) //not going to work
  }
}
car.start()

*/

let car = {
  brand: 'Acura',
  model: 'NSX',
  start: function() {
    console.log(`The best sports car is the ${this.brand} ${this.model}.`)
  }
}
car.start()

//Methods can accept parameters, like regular functions:
let car2 = {
  brand: 'BMW',
  model: 'X5',
  start: function(destination) {
    console.log(`Heading to the ${destination} this weekend. Going to drive my ${this.brand} ${this.model}.`)
  }
}
car2.start('coast')

/* Dynamically select a method of an object:

Sometimes you have an object and you need to call a method, or a different method, depending on some condition.
For example, you have a car object and you either want to drive() it or to park() it, depending on the 
driver.sleepy value.

If the driver has a sleepy level over 6, we need to park the car before he/she falls asleep while driving.

*/

//Here is program with an if/else condition:
if (driver.sleepy >6) {
    car.park()
} else {car.drive()}

//can use the ternary operator to dynamically choose the method name. Use the square brackets to select from
//the objects available methods. 
car[driver.sleepy > 6 ? 'park' : 'drive']      //this gets the method reference
car[driver.sleepy > 6 ? 'park' : 'drive']()   //appending the parenthesis invokes the method