//EJERCICIO: PREVENCION DE ERRORES


/**
 * Tarea 1: Codifique una declaración de función
Necesita codificar una declaración de función 
llamadaaddTwoNums, que acepte los númerosa 
y b y los registros de consolaa + b.
 */
//function addTwoNums(a, b) {
/// console.log(a + b);
//}

/*
Tarea 2: Invocar la funciónaddTwoNums con un número y una cadena de caracteres
Necesita invocar la funciónaddTwoNums utilizando los siguientes argumentos:5 y"5".
*/


/** 
 * Tarea 3: Actualice la funciónaddTwoNums con un bloque try...catch
Añada los bloques try y catch dentro del cuerpo 
de la definición de la función. Por ahora, sólo 
asegúrese de que el registro de la consola dea + b está dentro del bloque try. Además, el bloquecatch debe atrapar un error llamadoerr y, dentro del cuerpo del bloquecatch, debe 
registrar en la consola el valor deerr.
*/

//function addTwoNums(a,b){
// try{
//console.log(a + b)
//}catch(err){
//console.log(err);
//}
//}

/** 
 * Tarea 4: Si los argumentos pasados no son números, lance un error
Si alguno de los argumentos pasados aaddTwoNums no son números, lanzará un error.
 
Concretamente, codifique un condicional con la siguiente lógica
 
si eltypeof el parámetroa no es igual a'number', lance un nuevoReferenceError. Dentro deReferenceError, pase un mensaje de error personalizado de'the first argument is not a number'.
 
else if thetypeof theb parameter is not equal to'number', throw a newReferenceError. Dentro deReferenceError, pase un mensaje de error personalizado de'the second argument is not a number'.
 
else, registro de consolaa + b 
 
Una vez que haya completado esta tarea, todo el código dentro del bloquetry estará dentro de estas sentencias condicionales.
*/

function addTwoNums(a, b) {
    try {
        if (typeof a !== 'number') {
            throw new ReferenceError('the first argument is notg a number');
        } else if (typeof b !== 'number') {
            throw new ReferenceError('the second argument is not a number')
        } else {
            console.log(a + b);

        }
    } catch (err) {
        console.log("Error!", err);
    }
}
addTwoNums(5, "5");

/** 
 * Tarea 7: Añada otro registro de consola bajo la invocación de la funciónaddTwoNums
Añada otra línea de código que registre por consola la cadena"It still works"
 */

console.log("It still works");