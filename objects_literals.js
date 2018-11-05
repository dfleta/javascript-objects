
/**
 * Unlike variables, the this keyword does not have a scope, 
 * and nested functions do not inherit the this value of their caller. 
 * If a nested function is invoked as a method, its this value
 * is the object it was invoked on. 
 * If a nested function is invoked as a function then 
 * its this value will be either the global object (non-strict mode)
 * or undefined (strict mode). 
 * If you want to access the this value of the outer function, 
 * you need to store that value into a variable that is in scope
 * for the inner function. It is common to use the variable self for this purpose.
 * 
 * JavaScript. the Definitive Guide. David Flanagan.
 */

var empty = {};     // An object with no properties

var point = { x:0, y:0 };       // Two properties

var point2 = { x:point.x, y:point.y+1 };        // More complex values

var book = {
    "main title": "JavaScript",                 // Property names include spaces,
    'sub-title': "The Definitive Guide",        // and hyphens, so use string literals
    "for": "all audiences",                     // for is a reserved word, so quote
    author: {                                   // The value of this property is
        firstname: "David",                     // itself an object. Note that
        surname: "Flanagan"                     // these property names are unquoted.
    }
};
