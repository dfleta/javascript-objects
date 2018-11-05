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

/**
 * The hasOwnProperty() method of an object tests whether
 * that object has an own property with the given name. 
 * It returns false for inherited properties.
 */

var o = { x: 1 };
console.log(o.hasOwnProperty("x"));                  // true: o has an own property x
console.log(o.hasOwnProperty("y"));                  // false: o doesn't have a property y
console.log(o.hasOwnProperty("toString"));           // false: toString is an inherited property
