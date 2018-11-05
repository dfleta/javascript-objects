
/**
 * object["property"] looks like array access, 
 * but to an array indexed by strings rather than by numbers.
 * .This kind of array is known as an associative array (or hash or map or dictionary).
 * JavaScript objects are associative arrays, and this section explains why that is important.
 * 
 * JavaScript. the Definitive Guide. David Flanagan.
 */

var book = {
    "main title": "JavaScript",                 // Property names include spaces,
    'sub-title': "The Definitive Guide",        // and hyphens, so use string literals
    "for": "all audiences",                     // for is a reserved word, so quote
    author: {                                   // The value of this property is
        firstname: "David",                     // itself an object. Note that
        surname: "Flanagan"                     // these property names are unquoted.
    }
};

/**
 * Escribe aqui el código para mostrar en consola 
 * los valores de las propiedades del objeto book
 * utilizando un for
 * 
 * Que notacion has utilizado? dot o []
 * Por que?
 * leer libro pag. 120 y 121
 */

for(let property in book) {
    console.log(book[property]);
}

