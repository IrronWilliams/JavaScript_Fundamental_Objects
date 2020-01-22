/*You can add methods prefixed with 'get' or 'set' to create a getter and setter, which are two different pieces 
of code that are executed based on what you are doing: accessing the variable, or modifying its value.

Getters and setters are very useful when you want to execute some code upon changing the property value, 
or if you want to create a “computed” property. You can alter the values you return by using a getter.

*/

class Person {
    constructor(name) {
      this._name = name
    }
  
    set name(value) {
      this._name = value
    }
  
    get name() {
      return this._name
    }
  }
  
//If you only have a getter, the property cannot be set, and any attempt at doing so will be ignored.
class Person {
    constructor(name) {
      this._name = name
    }
  
    get name() {
      return this._name
    }
  }

//If you only have a setter, you can change the value but not access it from the outside.
class Person {
    constructor(name) {
      this._name = name
    }
  
    set name(value) {
      this._name = value
    }
  }
  