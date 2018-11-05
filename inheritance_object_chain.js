
// inherit() returns a newly created object that inherits properties from the
// prototype object p.  It uses the ECMAScript 5 function Object.create() if
// it is defined, and otherwise falls back to an older technique.

function inherit(p) {
    if (p == null) throw TypeError();   // p must be a non-null object
    if (Object.create)                  // If Object.create() is defined...
        return Object.create(p);        //    then just use it.
    var t = typeof p;                   // Otherwise do some more type checking
    if (t !== "object" && t !== "function") throw TypeError();
    function f() {};                    // Define a dummy constructor function.
    f.prototype = p;                    // Set its prototype property to p.
    return new f();                     // Use f() to create an "heir" of p.
}


/**
 * Como funciona la resolucion de nombre en la cadena de objetos
 * del siguiente codigo?
 */

var o = {};                 // o inherits object methods from Object.prototype
o.x = 1;                    // and has an own property x.

var p = inherit(o);         // p inherits properties from o and Object.prototype
p.y = 2;                    // and has an own property y.

var q = inherit(p);         // q inherits properties from p, o, and Object.prototype
q.z = 3;                    // and has an own property z.

var s = q.toString();       // toString is inherited from Object.prototype
console.log(q.x + q.y);     // => 3: x and y are inherited from o and p


/** 
 * Inheritance occurs when querying properties 
 * but not when setting them
 * It's a key feature of JavaScript
 * 
 * Explica el comportamiento de la herencia
 * respecto a la variable r
 */

var unitcircle = { r:1 };       // An object to inherit from
var c = inherit(unitcircle);    // c inherits the property r

c.x = 1; c.y = 1;               // c defines two properties of its own
c.r = 2;                        // c overrides its inherited property
console.log(unitcircle.r);      // => 1: the prototype object is not affected
