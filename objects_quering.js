
/**
 * To obtain the value of a property, use the dot (.) 
 * or square bracket ([]) operators. 
 * The left-hand side should be an expression whose value is an object.
 * If using the dot operator, the right-hand must be a simple identifier 
 * that names the property. 
 * If using square brackets, the value within the brackets must be 
 * an expression that evaluates to a string that contains the desired property name
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

// Excribe aquí el código para consultar los valores de las propiedades
// de los objetos empty, point y point2
// Utiliza la notacion dot y square brakets []

// Cambia el valor de las propiedades x e y del objeto point

// Cambia el valor de las propiedades "main title", "sub.title" y "for"
// del objeto book

// Cambia el valor de las propiedades del objeto author