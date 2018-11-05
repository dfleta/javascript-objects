/**
 * Averigua que situaciones producen un error 
 * en la eliminacion de las variables de un objeto
 * y cuales no, analizando el siguiente codigo. 
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

delete book.author;
delete book["main title"];


console.log(book.author);
console.log(book["main title"]);

// propiedades owned y heradadas: qué sucede al eliminarlas?

o = {x:1};          // o has own property x and inherits property toString
delete o.x;         // Delete x, and return true
delete o.x;         // Do nothing (x doesn't exist), and return true
delete o.toString;  // Do nothing (toString isn't an own property), return true
delete 1;           // Nonsense, but evaluates to true
