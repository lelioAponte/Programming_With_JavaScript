//EJERCICIO: PRACTICA DE ENUNNCIADOS CONDICIONALES
/**
 * Complete los siguientes pasos para crear: ¿Tiene usted edad suficiente? 
Declare una variable edad utilizando la palabra clave var y fíjela en el número 10.

Añada una sentencia if que compruebe si el valor de la variable age es mayor o igual que el número 65. Dentro del bloque if, console.log la sentencia "Obtiene sus ingresos de su pensión".

Añada un bloque "else if", en el que comprobará si el valor de la edad es menor que 65 y mayor o igual que 18. Dentro de este bloque "else if", escriba "console.log" y a continuación "Cada mes recibe un salario".

Añada otro bloque "else if", y esta vez compruebe si el valor de la edad es inferior a 18 años. Dentro del bloque "else if", "escriba console.log" y luego "Recibes un subsidio".

Añada una sentencia "else" para capturar cualquier otro valor. Dentro del bloque, escriba "console.log" y luego "El valor de la variable edad no es numérico".

Intente ajustar la edad y ejecute el programa para ver cómo afecta a la salida.
 */

var age = 18;

if (age >= 65) {
    console.log("Obtiene sus ingresos de pensión");
} else if( age < 65 && age >= 10) {
    console.log("cada mes recibe un salario");
}else if(age < 18){
    console.log("Recibe un subsidio");
}else{
    console.log("El valor de la edad no es numerico");
}



