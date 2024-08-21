for( let i = 0; i <= 5 ; i++){
    console.log(i);
}

console.log("Fin del conteo!")

/*  
Tarea 1
Escriba un bucle "for" que realice exactamente 
el mismo código repetitivo que éste:

*/
console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')

for (var i = 1 ; i <= 5 ; i++){
    console.log(i);
}

console.log("Counting Completed!");

/* 
Tarea 2 
Escriba un bucle "for" que realice 
exactamente el mismo código repetitivo que éste:
*/

console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')

for (var i = 5 ; i >= 1 ; i--){
    console.log(i);
}

console.log("Counting Finished!");

/* 
Tarea 3
Escriba un bucle "while" que realice
 exactamente el mismo código repetitivo que éste:
*/

console.log(1)
console.log(2)
console.log(3)
console.log(4)
console.log(5)
console.log('Counting completed!')
var i = 1;

while(i <= 5){
    console.log(i);
    i++;
}
console.log("Counting Completed")


/** 
 * Tarea 4
Escriba un bucle "while" que realice exactamente
 el mismo código repetitivo que éste:
 */

 console.log(5)
console.log(4)
console.log(3)
console.log(2)
console.log(1)
console.log('Countdown finished!')
var i = 5;

while(i >= 1){
    console.log(i);
    i--;
}
console.log("Counting Finished!")


/*
Ejercicio 1

En este ejercicio, creará el código para un for loop, utilizando la variable contador llamada i empezando por 1.

Para hacer que el contador se incremente en 1 en cada bucle, utilizará i++.

La condición de salida para el bucle for debe coincidir con la salida dada a continuación. 

Dentro del bucle, escriba una sentencia if-else, que comprobará las siguientes condiciones:

Primero, comprobará si el valor de i es  1. Si lo es, su código registrará por consola la cadena "Medalla de oro".

A continuación, comprobará si el valor de i es 2. Si lo es, su código registrará por consola la cadena "Medalla de plata" .

A continuación, su código comprobará si el valor de i es 3. Si lo es, registrará en consola la cadena "Medalla de bronce" .

Para todos los valores restantes de i, su código registrará en consola sólo el valor de i.

Nota: El registro de consola esperado de todo el código debería ser el siguiente
Medalla de oro
Medalla de plata
Medalla de bronce
4
5
6
7
8
9
10
*/

for (var i = 1 ; i <= 10 ; i++){
    if(i === 1){
        console.log("Medalla de oro");
    }else if(i === 2){
        console.log("Medalla de plata");
    }else if(i === 3){
        console.log("Medalla de bronce");
    }else{
        console.log(i);
    }
}



/** 
 * Ejercicio 2. Utilice el código completado de la tarea anterior, pero convierta los condicionales en una sentencia switch.
Cuando codifique la solución, la salida en la consola debe seguir siendo exactamente la misma que en la pregunta anterior.

Nota: Necesitará tres casos distintos para las tres medallas y un caso por defecto para todos los demás valores de la variable i.
 */

for (var i = 1 ; i <= 10 ; i++){
    switch(i){
        case 1:
            console.log("Medalla de oro");
            break;
        case 2:
            console.log("Medalla de plata");
            break;
        case 3:
            console.log("Medalla de bronce");
            break;
        default:
            console.log(i);
            break;
    }
}


for (i = 0; i < 2; i++) {
    for (var j = 0; j < 3; j++) {
        console.log("Hello");
    }
}

for (i = 0; i < 2; i++) {
    console.log("Hello");
}
