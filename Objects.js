/* Objects are similar to arrays, except that instead of using indexes to access and modify their data, 
you access the data in objects through what are called properties.

Objects are useful for storing data in a structured way, and can represent real world objects, like a cat.

var cat = {
  "name": "Whiskers",
  "legs": 4,
  "tails": 1,
  "enemies": ["Water", "Dogs"]
};

In this example, all the properties are stored as strings, such as - "name", "legs", and "tails". However, you 
can also use numbers as properties. You can even omit the quotes for single-word string properties, as follows.
However, if your object has any non-string properties, JavaScript will automatically typecast them as strings.

var anotherObject = {
  make: "Ford",
  5: "five",
  "model": "focus"
};

There are two ways to access the properties of an object: dot notation (.) and bracket notation ([]), similar to 
an array. Dot notation is what you use when you know the name of the property you're trying to access ahead of time.

Here is a sample of using dot notation (.) to read an object's property:

var myObj = {
  prop1: "val1",
  prop2: "val2"
};
var prop1val = myObj.prop1; // val1
var prop2val = myObj.prop2; // val2

If the property of the object you are trying to access has a space in its name, you will need to use bracket 
notation. However, you can still use bracket notation on object properties without spaces.

Here is a sample of using bracket notation to read an object's property. Property names with spaces in them must 
be in quotes (single or double).

var myObj = {
  "Space Name": "Kirk",
  "More Space": "Spock",
  "NoSpace": "USS Enterprise"
};
myObj["Space Name"]; // Kirk
myObj['More Space']; // Spock
myObj["NoSpace"];    // USS Enterprise

Sometimes you may want to store data in a flexible Data Structure. A JavaScript object is one way to handle 
flexible data. They allow for arbitrary combinations of strings, numbers, booleans, arrays, functions, 
and objects.

Here's an example of a complex data structure.  This is an array which contains one object inside. The object has 
various pieces of metadata about an album. It also has a nested "formats" array. If you want to add more album 
records, you can do this by adding records to the top level array. Objects hold data in a property, which has a 
key-value format. In example, "artist": "Daft Punk" is a property that has a key of "artist" and a value of 
"Daft Punk"

var ourMusic = [
  {
    "artist": "Daft Punk",
    "title": "Homework",
    "release_year": 1997,
    "formats": [ 
      "CD", 
      "Cassette", 
      "LP"
    ],
    "gold": true
  }
];

Objects can contain both nested objects and nested arrays. Similar to accessing nested objects, Array bracket 
notation can be chained to access nested arrays.

Here is an example of how to access a nested array:

var ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }  
];
ourPets[0].names[1]; // "Fluffy"
ourPets[1].names[0]; // "Spot"


There are multiple ways to define an object:

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
let myCar = new Car('Toyota', 'Camry')  
console.log(myCar.brand) 
console.log(myCar.model) 

/* Objects have properties. Every property has a name and a value. Can think of an object as a map, or dictionary, 
or data structure.  The value of a property can be of any type, can even be an object, as objects can nest other 
objects.

When a property value is a function, it is called a method.

Objects can inherit their properties from other objects.  

Objects are always passed by reference.

*/

//If you assign a variable the same value of another, if it’s a primitive type like a number or a string, 
//they are passed by value. 
let age = 45
let myAge = age
myAge = 38
console.log(age) //will return value of variable age.  changing value for variable myAge will not change variable age

let car = {
    color: 'blue'
  }
  let anotherCar = car
  anotherCar.color = 'yellow'
  console.log(car.color) //'yellow' because anotherCar passed value to car. although blue is value of property, blue was not passed. 
  