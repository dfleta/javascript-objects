
/**
 * 2D cartesian point
 * Polar coordinates of the point
 * 
 * Property attributes and descriptor object
 * 
 * The four attributes of a data property are 
 * value, writable, enumerable, and configurable. 
 * Accessor properties don’t have a value attribute 
 * or a writable attribute: 
 * their writability is determined by the presence
 * or absence of a setter.
 * The four attributes of an accessor property are
 * get, set, enumerable, and configurable.
 *
 * 
 * JavaScript. the Definitive Guide. David Flanagan.
 */


var p = {
    // x and y are regular read-write data properties.
    x: 1.0,
    y: 1.0,     
    // r is a read-write accessor property with getter and setter.
    // Don't forget to put a comma after accessor methods.
    get r() { 
        return Math.sqrt(this.x*this.x + this.y*this.y); 
    },
    
    set r(newvalue) {
        var oldvalue = Math.sqrt(this.x*this.x + this.y*this.y);
        var ratio = newvalue/oldvalue;
        this.x *= ratio;        // this refers to the point object
        this.y *= ratio;
    },

    // theta is a read-only accessor property with getter only.
    get theta() { return Math.atan2(this.y, this.x); }
};


// Returns {value: 1, writable:true, enumerable:true, configurable:true}
console.log(Object.getOwnPropertyDescriptor(p, "x"));

// Returns {value: 1, writable:true, enumerable:true, configurable:true}
console.log(Object.getOwnPropertyDescriptor(p, "y"));

// Returns {get, set, enumerable:true, configurable:true}
console.log(Object.getOwnPropertyDescriptor(p, "r"));

// Returns {get, set: undefined, enumerable:true, configurable:true}
console.log(Object.getOwnPropertyDescriptor(p, "theta"));

// Returns undefined for inherited properties
console.log(Object.getOwnPropertyDescriptor(p, "toString"));

// Returns undefined for properties that doesn't exist
console.log(Object.getOwnPropertyDescriptor(p, "z"));

