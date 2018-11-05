/**
 * JavaScript objects can be thought of as sets of properties, 
 * and it is often useful to be able to test for membership
 * in the set to check whether an object has a property with
 * a given name. 
 * You can do this with the in operator, with the hasOwnProperty() 
 * and propertyIsEnumerable() methods, or simply by querying the property.
 */


var o = { x: 1 };
console.log("x" in o);                // true: o has an own property "x"
console.log("y" in o);                // false: o doesn't have a property "y"
console.log("toString" in o);         // true: o inherits a toString property
