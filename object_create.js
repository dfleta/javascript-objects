
var o = {x:1, y:2};

var o1 = Object.create(o);      // o1 inherits properties x and y.
console.log(o1.x);
console.log(toString);

var o2 = Object.create(null);
console.log(o2.toString);
