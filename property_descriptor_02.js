/**
 * Property attributes and descriptor object
 * 
 * To set the attributes of a property, or to create a new property
 * with the specified attributes, call Object.defineProperty(), 
 * passing the object to be modified, the name of the property 
 * to be created or altered, and the property descriptor object
 * 
 * JavaScript. the Definitive Guide. David Flanagan.
 */


var o = {}; // Start with no properties at all

// Add a nonenumerable data property x with value 1.
Object.defineProperty(o, "x", { value : 1,
                                writable: true,
                                enumerable: false,
                                configurable: true});

// Check that the property is there but is nonenumerable
console.log("x es 1: " + o.x);                   // => 1
console.log("Keys de x: ninguna " + Object.keys(o));        // => []

// Now modify the property x so that it is read-only
// al modificar una propiedad que existe, que sucede con los atributos que no indicas?
Object.defineProperty(o, "x", { writable: false });

// Try to change the value of the property
o.x = 2;                      // Fails silently or throws TypeError in strict mode
console.log("x sigue siendo 1: " + o.x);             // => 1

// The property is still configurable, so we can change its value like this:
Object.defineProperty(o, "x", { value: 2 });
console.log("cambiamos x a lo bruto con la propiedad value, x: " + o.x);       // => 2

// Now change x from a data property to an accessor property
Object.defineProperty(o, "x", { get: function() { return 0; } });
console.log("get() x : " + o.x);             // => 0

// al crear una propiedad, que sucede con los atributos que no especificas?
Object.defineProperty(o, "y", {});
console.log("y: " + o.y);
console.log(Object.getOwnPropertyDescriptor(o, "y"));


// ver mas ejemplos en: 
// https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/defineProperty#summary

/**
 * If you want to create or modify more than one property at a time, 
 * use Object.defineProperties(). 
 * The first argument is the object that is to be modified. 
 * The second argument is an object that maps the names 
 * of the properties to be created or modified to
 * the property descriptors for those properties.
 */

// the first argument is the object that is to be modificated 
var p = Object.defineProperties({}, {
    x: { value: 1, writable: true, enumerable:true, configurable:true },
    y: { value: 1, writable: true, enumerable:true, configurable:true },
    // z no es enumerable
    z: { value: 1, writable: true, enumerable: false, configurable: true }, 
    r: {
        get: function() { return Math.sqrt(this.x*this.x + this.y*this.y) },
        enumerable:true,
        configurable:true
    }
});

// z no es numerable
for(property in p){
    console.log(property + " : " + p[property]);
};

