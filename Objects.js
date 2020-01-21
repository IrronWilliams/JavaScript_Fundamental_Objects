/* There are multiple ways to define an object:

Object literal syntax: let car {}

new Object syntax: let car = new Object()

other syntax: let car = Object.create()

Can also initialize an object using the 'new' keyword before a function with a capital letter. 
This function serves as a constructor for that object. In there, we can initialize the arguments 
we receive as parameters, to setup the initial state of the object:

*/

//setting up initial state of the object. 
//function serves as a constructor for the object. 
//within function, initialize arguments received as parameters
function Car(brand, model) {
    this.brand = brand
    this.model = model
  }

//initialize new object using 'new' keyword before function with capital letter.
let myCar = new Car('Ford', 'Fiesta')  
myCar.brand //'Ford'
myCar.model //'Fiesta'

/* Objects have properties. Every property has a name and a value. Can think of an object as a map, or dictionary, 
or data structure.  The value of a property can be of any type, can even be an object, as objects can nest other 
objects.

When a property value is a function, it is called a method.

Objects can inherit their properties from other objects.  

Objects are always passed by reference.



*/

//If you assign a variable the same value of another, if it’s a primitive type like a number or a string, 
//they are passed by value. 
let age = 36
let myAge = age
myAge = 37
age //will return 36

let car = {
    color: 'blue'
  }
  let anotherCar = car
  anotherCar.color = 'yellow'
  car.color //'yellow' because anotherCar passed value to car. although blue is value of property, blue was not passed. 
  