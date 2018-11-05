
/**
 * Averigua que situaciones producen un error 
 * en el acceso a las variables de un objeto
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


console.log(book.subtitle);

var len = book.subtitle.lenght;
