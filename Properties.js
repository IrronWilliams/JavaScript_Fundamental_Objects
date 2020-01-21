/* Objects have properties, each have a label with an associated value.  The object literal syntax:

let car = {}

Allows me to define a 'car' object with a property name labeled 'color' with a 'value' of blue. 

let car = {color: 'blue'}

Labels can be any string. Quotes were not required for the label color. If I wanted to include spaces, hyphens, 
or other special characters in the property name, I will need quotes. Each property is separated by a comma. 
You set the value of a property when you define the object. 

let car = {'the color': 'blue',
            color: blue}

Attempting to access an nonexisting property results in an undefined error.  
*/

//2 different syntaxes can be used to retrieve value of a property, dot notation and square brackets

let car = {color: 'blue',
           'the color': 'deep blue'
}
console.log(car.color)
console.log(car['the color'])

//Objects can have nested objects as properties.  Each property is separated by a comma
let car2 = {
    brand: {
      name: 'Ford'
    },
    color: 'blue'
  }

let brandName = car2.brand.name //dot notation
let brandName2 = car2['brand']['name'] //square brackets
console.log(brandName)
console.log(brandName2)

//can also mix dot notation and square brackets
car2.brand['name']
car2['brand'].name

//can update the value of property after it is defined. 
let car3 = {color: 'red'} //defining property and setting value
console.log(car3.color)
car3.color = 'pink' //updating property value using dot notation
console.log(car3.color)
car3.color = ['hot magenta']//updating property value using square brackets
console.log(car3.color)

//can also add a new property to object.
car3.model = 'Buick' //adding new property to object
console.log(car3)

//can also remove a property from an object
let car4 = {
    color: 'blue',
    brand: 'Ford'
  }
console.log(car4)
delete car4.brand //removing the brand property from the car4 object
console.log(car4)
//square brackets also works = delete car['brand']


/* Remove a property without mutating the object:
   If mutability is a concern, can create a completely new object by copying all the properties from the old, 
   except the one you want to remove.
*/
let carCopy = {
    color: 'blue',
    brand: 'Ford'
  }
  let prop = 'color'
  
  let newCar = Object.keys(car).reduce((object, key) => {
    if (key !== prop) {
      object[key] = car[key]
    }
    return object
  }, {})

/* Counting the number of properties in an object:
   Use the Object.keys() method, passing the object you want to inspect, to get an array of all the enumerable 
   properties of the object. (Enumerable properties are those properties whose internal enumerable flag is set to 
   true, which is the default for properties created via simple assignment or via a property initializer.)

    Then calculate the length of that array by checking the length property:    
*/
let propCount = {
    color: 'Blue',
    brand: 'Ford',
    model: 'Fiesta'
  } 
let count = Object.keys(propCount).length
console.log(count)

/* Use the typeof operator. to Check if an object property is undefined.  
   typeof returns a string that tells the type of the operand. It is used without parentheses, passing it any 
   value you want to check.
*/
let list = []
let count2 = 2

console.log(typeof list) //"object"
console.log(typeof count2) //"number"
console.log(typeof "test") //"string"

//if value is not defined, typeof returns the 'undefined' string
console.log(typeof color) //"undefined"

//checking if a property is defined in an object
let jeans = {
    brand: 'Gap'
  }
if (typeof jeans.brand === 'undefined') {
    console.log('undefined')
  
}
else (console.log('defined'))  