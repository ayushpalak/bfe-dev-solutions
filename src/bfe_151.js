/**  151. implement Array.prototype.map()

 [1,2,3].myMap(num => num * 2)
 [2,4,6]

*/

// copied from lib.es5.d.ts
// declare interface Array<T> {
//     myMap<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
// }


// thisArg is used by cb to allow map function to keep the cb 'binded' while 
// calling cb on global context.

Array.prototype.myMap = function(callback, thisArg) {
    const length = this.length
    const result = new Array(length)

    for (let i = 0; i < length; i++) {
      // checks of i is an index of array.
      // 'in' in JS check for property and not value unlike python.
      // you should not use this[i] since that will return false for null entries.
      if (i in this) {
        // since callback may contain a this call, so using call to bind cb's this.
        result[i] = callback.call(thisArg, this[i], i, this)
      }
    }

    return result
  }

const arr = [1,undefined,null,3];
console.log(arr.myMap(item => item));
console.log(arr.map(item => item));

const scaleObj = {
    scale: 30
}

const obj = {
    scale: 2,
    calc: function () {
        return arr.map(function (item) {
            console.log(this.scale);
            return item;
        }.bind(scaleObj))
    }
}


console.log(obj.calc.call(scaleObj));

// below example shows why we need this.
// since this.things has scoped the inside this to search for foo
// on this.thigs.foo which is undefined. So we can bind this by passing this as 
// argument to map.

// another solution would be to create a reference of this just outside the map
// and use that reference inside.

// var self = this.

obj = {
    foo: 'bar'
}
a = {
    foo: 'bar',
    things: [1, 2, 3],
    showFooForEach: function () {
        // Alt approach to this.
        // var self = this.
        this.things.map(function (thing) {
            console.log(this.foo, thing);
        },this);
    }
}
a.showFooForEach();
