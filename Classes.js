/* 
A class has an identifier, which can be used to create new objects using new ClassIdentifier().
When the object is initialized, the constructor method is called, with any parameters passed.
A class also has as many methods as it needs. In this case hello is a method and can be called on all 
objects derived from this class.
 */

//a class looks like this
class Person {      //class identifier 
    constructor(name) {  //constructor method called upon object initialization. receiving parameter called 'name'
      this.name = name  //must initialize any variable in the constructor
    }
  
    hello() {
      return 'Hello, I am ' + this.name + '.'
    }
  }
let Ron= new Person('Ron')  //using class identifier to create a new object.  also initializing object, thus calling constructor method and passing parameter Ron
let greeting = Ron.hello()  //New object called Ron created from the Person class. New object Ron now has access to the hello method from the Person class.   
console.log(greeting)

/* Static Methods: Normally methods are defined on the instance, not on the class.
Static methods are executed on the class instead: */
class Person2 {
    static genericHello() {
      return 'Hello'
    }
  }
  Person2.genericHello() //Hello

/* Class Inheritance

Classes give JavaScript a more “classic” take on inheritance. A class can 'extend' another class, and objects 
initialized using that class inherit all the methods of both classes.

Inside a class, you can reference the parent class calling super(). If the inherited class has a method with the 
same name as one of the classes higher in the hierarchy, the 'closest' method takes precedence:

*/
//(the program prints “Hello, I am Wilkes. I am a programmer.”)
class Programmer extends Person {    //class Programmer inheriting from Person class 
    hello() {
      return super.hello() + ' I am a programmer.'//referencing the hello method (function) from parent class Person
    }
  }
  
  let Wilkes = new Programmer('Wilkes')
  let text = Wilkes.hello()
  console.log(text)