//Given an object, can extract just some values and put them into named variables. name and age contain desired values.
let person = {
    firstName: 'Charleze',
    lastName: 'Theron',
    actor: true,
    age: 49, 
  }
  let {firstName: name, age} = person
  
//The syntax also works on arrays.   
let a = [1,2,3,4,5]
let [first, second] = a

//This statement creates 3 new variables by getting the items with index 0, 1, 4 from the array a:
let [first, second, , , fifth] = a