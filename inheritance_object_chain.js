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
cpnsole.log(unitcircle.r);      // => 1: the prototype object is not affected
