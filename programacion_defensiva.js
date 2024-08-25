//EJERCICIO: PROGRAMACION DEFENSSIVA

function letterFinder(word, match) {
    /** 
     * Justo encima del bucle for 
     * en la definición de la función letterFinder, 
     * declare una variable llamada condition1 y asígnele 
     * el siguiente 
     * código: typeof(word) == 'string' && word.length >= 2.
     */
    var condition1 = typeof(word) == 'string' && word.length >= 2;

    /** 
     * Declare una variable llamada 
     * condition2 en la línea siguiente y 
     * asígnele y asígnele una comprobación que 
     * asegure que el tipo de match es una cadena Y 
     * que la longitud 
     * de la variable match es igual a 1.
     */

    var condition2 = typeof(match) == 'string' && match.length == 1;

    /**
     * Escriba una sentencia if en 
     * la línea siguiente que compruebe 
     * que condition1 es true, y condition2 es true

Mueva el resto del cuerpo de 
la función a la sentencia if que 
escribió en el paso anterior.
     */
    if ( condition1 = true && condition2 == true) {

        for(var i = 0; i < word.length; i++) {
            if(word[i] == match) {
                //if the current character at position i in the word is equal to the match
                console.log('Found the', match, 'at', i)
            } else {
                console.log('---No match found at', i)
            }
        }
    
        /** 
         * Codifique un bloque "else" después de 
         * la condición "if" y console.log lo siguiente: 
         * "Please pass correct arguments to the function.".
         */

    }else {
        console.log("Please pass correct arguments to the fuction");
    }

}

/** 
 * Como prueba de fallo, ejecute 
 * la función letterFinder y pásele 
 * dos números cualesquiera como argumentos.

Como prueba de aprobación, ejecute la 
función letterFinder y pásela con los 
argumentos correctos, como: letterFinder("cat", "c").
 */
//letterFinder(2, 3);

letterFinder("cat", "c");




var str = "Hello";
str.match("jello");
console.log(str.match("jello")); // null
