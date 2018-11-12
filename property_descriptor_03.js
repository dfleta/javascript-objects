
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


var o = Object.defineProperties({}, {
    x: { value: 1, writable: true, enumerable:true, configurable:false },
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
for(property in o){
    console.log(property + " : " + o[property]);
};

// x es writable aunque no sea configurable
o.x = 2;
console.log("x write a 2: " + o.x);

// cambio x a read only aunque no sea configurable
Object.defineProperty(o, "x",  { writable: false });
o.x = 3;
console.log("x writable false: " + o.x);

// si no es configurable no puedo cambiar a writable
// Object.defineProperty(o, "x",  { writable: true });     // error: cannot refedine property

// como x no es configurable, no puedo cambiar enumerable ni configurable
// Object.defineProperty(o, "x", { enumerable: false });   // error: cannot refedine property
// Object.defineProperty(o, "x", { configurable: false });   // error: cannot refedine property

// si accessor property es configurable puedo hacerla data
Object.defineProperty(o, "r",  { value: 1 });
console.log("r es data property ahora: " + o.r);

// si data property es configurable puedo hacerla accessor
Object.defineProperty(o, "y", {get: function() { return 0; } } );
console.log("y es get: " + o.y);

// si data property no es configurable, no puedo hacerla accessor
// Object.defineProperty(o, "x", {get: function() { return 0; } } );   // error: cannot refedine property
