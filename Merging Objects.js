/* The Spread Operator, is the perfect way to merge two simple objects into one. If both objects have a property 
with the same name, then the second object property overwrites the first.

The best solution in this case is to use Lodash and its merge() method, which will perform a deeper merge, 
recursively merging object properties and arrays.

*/

let object1 = {
    name: 'Flavio'
  }
  
  let object2 = {
    age: 35
  }
  
  let object3 = {...object1, ...object2 }  