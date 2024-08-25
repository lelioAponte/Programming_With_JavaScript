//literales de objetos y la notacion de punto

/*
Un enfoque 
alternativo de la construcción de 
objetos es guardar primero un literal de 
objeto vacío en una variable, luego utilizar 
la notación de puntos para declarar nuevas propiedades 
sobre la marcha, y utilizar el operador de asignación 
para añadir valores a esas propiedades; por ejemplo:
*/

var house2 = {};
house2.rooms = 4;
house2.color = "blue";
house2.priceUSD = 200000;

console.log(house2);

//EJERCICIO: LITERALES DE OBJETOS Y LA NOTACIÓN DE CORCHETES
/**
 * Existe una sintaxis alternativa a la notación de puntos 
 que he utilizado hasta ahora.
Esta sintaxis alternativa se conoce comola 
notación de corchetes.
Para entender cómo funciona, lo mejor es utilizar un ejemplo, así que volveré a pasar por el proceso de codificación del objetohouse2, de la misma forma que lo hice con la notación de puntos, sólo 
que esta vez, utilizaré la notación de corchetes.
 */

var house3 = {};
house3["rooms"] = 4;
house3["color"] = "blue";
house3["priceUSD"] = 200000;

console.log(house3);

/** 
 * Por último, hay una cosa realmente 
 * útil que tiene la notación de corchetes 
 * pero que no está disponible en la notación de puntos:
 *  Puede evaluar expresiones.

Para entender lo que eso significa, considere el siguiente ejemplo:
 */

var arrOfKeys = ["speed", "altitude", "color"];
var drone = {
    speed: 100,
    altitude: 200,
    color: "black"
};

//ahora hacemos un for para iterar sobre el array de claves

for(var i = 0; i < arrOfKeys.length; i++){
    console.log(drone[arrOfKeys[i]]);
}