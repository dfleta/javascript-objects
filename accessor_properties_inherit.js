
/**
 * 2D cartesian point
 * Polar coordinates of the point
 * 
 * Accesor properties are inherited, just as data properties are.
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


var q = inherit(p);     // Create a new object that inherits getters and setters
q.x = 0, q.y = 0;       // Create q's own data properties
console.log(q.r);       // And use the inherited accessor properties
console.log(q.theta);
