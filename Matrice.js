// 1. declaramos una funcion 
function listArrayItems(arr){
    for(var i =0; i < arr.length; i++){
        console.log(i+1, arr[i]);
        if( arr[i] === "green"){
            console.log("I found the color green");
        }else{
            console.log("I did not find the color green");
        }
    }
}

//2. creamo una matriz de colores

var colors = ["red", "blue", "green", "yellow", "orange", "purple"];

//3. llamamos a la funcion y pasamos la matriz de colores como argumento
listArrayItems(colors);

// EJERCICIO: PRACTICA CON FUNCIONES

// 1. Ecriba una funcion llamada letterFinder que acepte los paramatros Word y Match
function letterFinder(word, match){
    //2. crear un bucle for dentro de la funcion 
    for(var i = 0; i < word.length; i++){
        //3. crear una declaracion if dentro del bucle for cuya 
        //condcion funcione como igue:
        // Acceda a cada una de las letras dentro de la palabra pasada utilizando la variable contador, con palabra[i]. 
        //Compruebe si la palabra [ i] actual es igual al valor de coincidencia.
        if(word[i] === match){
            console.log("Encontrado el", match, "en", i);
        }else{
            console.log("---No se ha encontrado ninguna coincidencia en",i);
        }

    }
}

/** 
 * Tarea 4:
consola.log lo siguiente dentro del cuerpo de la sentencia if: console.log('Encontrado el', coincidencia, 'en', i).

Tarea 5:
Escriba la condición else. Aquí sólo tendrá que registrar en la consola lo siguiente: console.log(' ---No se ha encontrado ninguna coincidencia en', i).

Tarea 6:
Llame al buscador de letras y pásele como primer argumento la cadena "test" y como segundo argumento la cadena "t".
 */

letterFinder("test", "t");