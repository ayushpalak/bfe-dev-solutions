
// implement Function.prototype.call

Function.prototype.mycall = function(thisArg, ...args) {
    // your code here
    thisArg = thisArg || window; // thisArg can be empty
    thisArg = Object(thisArg); // transform primitive value
    let func = Symbol(); // create a unique property (using Date.now().toString() to create unique property does not work)
    thisArg[func] = this; // assign the function to a unique method created on the context
    let res = thisArg[func](...args) // call the method with passed args
    delete thisArg[func]; // delete this unique method so as to not cause any sideeffects
    return res;
  }
  