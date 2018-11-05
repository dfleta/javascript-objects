/**
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
console.log(o.x);                   // => 1
console.log(Object.keys(o));        // => []

// Now modify the property x so that it is read-only
// al modificar una propiedad que exiete, que sucede con los atributos que no indicas?
Object.defineProperty(o, "x", { writable: false });

// Try to change the value of the property
o.x = 2;                      // Fails silently or throws TypeError in strict mode
console.log(o.x);             // => 1

// The property is still configurable, so we can change its value like this:
Object.defineProperty(o, "x", { value: 2 });
console.log(o.x);             // => 2

// Now change x from a data property to an accessor property
Object.defineProperty(o, "x", { get: function() { return 0; } });
console.log(o.x);             // => 0

// al crear una propiedad, que sucede con los atributos que no especificas?
Object.defineProperty(o, "y", {});
console.log(Object.getOwnPropertyDescriptor(o, "y"));


// ver mas ejemplos en: https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Object/defineProperty#summary

