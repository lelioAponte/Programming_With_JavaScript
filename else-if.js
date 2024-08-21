//EJERCICIO: PRACTICA DE ENUNNCIADOS CONDICIONALES

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



