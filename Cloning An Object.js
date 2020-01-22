/* Copying objects in JavaScript can be tricky. Some ways perform a shallow copy, which is the default behavior 
in most of the cases.

Deep copy vs Shallow copy

A shallow copy successfully copies primitive types like numbers and strings, but any object reference will not be 
recursively copied, but instead the new, copied object will reference the same object. If an object references 
other objects, when performing a shallow copy of the object, you copy the references to the external objects.

When performing a deep copy, those external objects are copied as well, so the new, cloned object is completely 
independent from the old one. Looking out how to deep clone an object in JavaScript on the internet, you’ll find 
lots of answers but not always the answer is correct.

Lodash is the easiest option to perform a deep copy.  Lodash is a library that’s well tested, very popular and 
carefully maintained. Lodash offers the very convenient clone and deepclone functions to perform shallow and deep 
cloning. Lodash has the feature of importing single functions separately in your project to reduce a lot the 
size of the dependency.

*/


//in node.js
const clone = require('lodash.clone')
const clonedeep = require('lodash.clonedeep')

/* An example that shows those two functions in use. First create a shallow copy, and edit the i.color property, 
which propagates to the copied object.  In the deep clone, this does not happen.
*/

const clone = require('lodash.clone')
const clonedeep = require('lodash.clonedeep')

const externalObject = {
  color: 'red'
}

const original = {
  a: new Date(),
  b: NaN,
  c: new Function(),
  d: undefined,
  e: function() {},
  f: Number,
  g: false,
  h: Infinity,
  i: externalObject
}

const cloned = clone(original)

externalObject.color = 'blue'

console.info('⬇️ shallow cloning 🌈')
console.info(
  '✏️ Notice the i.color property we changed on original is also changed in the shallow copy'
)
console.log(original)
console.log(cloned)

const deepcloned = clonedeep(original)

externalObject.color = 'yellow'
console.log('')
console.info('⬇️ deep cloning 🌈')
console.info('✏️ Notice the i.color property does not propagate any more')
console.log(original)
console.log(deepcloned)

//Object.assign() performs a shallow copy of an object, not a deep clone.
const copied = Object.assign({}, original)

/* Being a shallow copy, values are cloned, and objects references are copied (not the objects themselves), so 
if you edit an object property in the original object, that’s modified also in the copied object, since the 
referenced inner object is the same:
*/
const original = {
    name: 'Fiesta',
    car: {
      color: 'blue'
    }
  }
  const copied = Object.assign({}, original)
  
  original.name = 'Focus'
  original.car.color = 'yellow'
  
  copied.name //Fiesta
  copied.car.color //yellow

//The Object Spread operator provides a very convenient way to perform a shallow clone, equivalent to what Object.assign() does.
let copied = { ...original }

/* Wrong solutions - Online you will find many suggestions. Here are some wrong ones:
Using Object.create()

    Note: not recommended

const copied = Object.create(original)

This is wrong, it’s not performing any copy. Instead, the original object is being used as the prototype of copied.
Apparently it works, but under the hoods it does not:

const original = {
  name: 'Fiesta'
}
const copied = Object.create(original)
copied.name //Fiesta

original.hasOwnProperty('name') //true
copied.hasOwnProperty('name') //false

JSON serialization

    Note: not recommended

Some recommend transforming to JSON:

const cloned = JSON.parse(JSON.stringify(original))

This has unexpected consequences. By doing this you will lose any Javascript property that has no equivalent type 
in JSON, like Function or Infinity. Any property that’s assigned to undefined will be ignored by JSON.stringify, 
causing them to be missed on the cloned object.

Also, some objects are converted to strings, like Date objects for example, (also, not taking into account the 
timezone and defaulting to UTC), Set, Map and many others:

JSON.parse(
  JSON.stringify({
    a: new Date(),
    b: NaN,
    c: new Function(),
    d: undefined,
    e: function() {},
    f: Number,
    g: false,
    h: Infinity
  })
)

This only works if you do not have any inner objects and functions, but just values.
*/
