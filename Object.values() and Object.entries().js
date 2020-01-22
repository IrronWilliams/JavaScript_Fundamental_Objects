//Object.values() method returns an array containing all the object's property values.
let person = { name: 'Stella', age: 87 }
let arr1 = Object.values(person) // ['Stella', 87]
console.log(arr1)

//Object.values() also works with arrays:
let people = ['Mariah', 'Lance']
let arr2 = Object.values(people) // ['Mariah', 'Lance']
console.log(arr2)

//Object.entries() method returns an array containing all the object's properties, as an array of [key, value] pairs.
let person2 = { name: 'Timothy', age: 33 }
let arr3 = Object.entries(person2) // [['name', 'Timothy'], ['age', 33]]
console.log(arr3)

//Object.entries() also works with arrays:
let people2 = ['Ziggy', 'Lance']
let arr4 = Object.entries(people2) // [['0', 'Ziggy'], ['1', 'Lance']]
console.log(arr4)