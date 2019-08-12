/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window or Global binding. The this keyword is bound to the window object in browsers and the global object in Node.  
* 2. Implicit binding. When a function is called by a precceding dot the object preceding the dot is this. 
* 3. New binding. When a constructor function is used this referes to the instance of the object created and returned by the constructor function.
* 4. Explicit binding. Whe using .call or .apply this si set to the context referenced by .call or .apply.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log('windor/global scope this ===', this);

// Principle 2

// code example for Implicit Binding
const myObj = {
  speak: (binding) => {
    console.log(`This is ${binding} binding.`);
  }
}
myObj.speak('implicit')

// Principle 3

// code example for New Binding

function WorldLocation(location) {
  this.where = 'Where is this place?';
  this.location = location;
  this.sayLocation = function () {
    console.log(`${this.where} ${this.location}.`);
  };
}

const mexico = new WorldLocation('Mexico');
const italy = new WorldLocation('Italy');

mexico.sayLocation();
italy.sayLocation();


// Principle 4

// code example for Explicit Binding

mexico.sayLocation.call(italy);
italy.sayLocation.apply(mexico);