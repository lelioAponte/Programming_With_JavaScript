//Cree un nuevo literal de array vacío y asígnelo a la variable clothes.
var clothes = [];

//Añada 5 de sus prendas de ropa favoritas como cadenas utilizando el método push().
clothes.push("short", "camisa", "pantalon","medias","boxer");
console.log(clothes);
//[ 'short', 'camisa', 'pantalon', 'medias', 'boxer' ]

//Elimine la quinta pieza de ropa del array utilizando el método pop().
clothes.pop(4);
console.log(clothes);
//[ 'short', 'camisa', 'pantalon', 'medias' ]

//Añada una nueva pieza de ropa utilizando el método push().
clothes.push("manilla");
console.log(clothes);
//[ 'short', 'camisa', 'pantalon', 'medias', 'manilla' ]

//Utilice console.log para mostrar el tercer artículo de la matriz clothes en la consola.
console.log(clothes[2]);
//pantalon

//Cree un nuevo literal de objeto vacío y asígnelo a la variable favCar.
var favCar = {};

//Utilizando la notación de puntos, asigne una propiedad color al objeto favCar y dele un valor de cadena con el color de su elección.
favCar.color = 'blue';
//Utilizando la notación de puntos, asigne una propiedad covertible al objeto favCar y dele un valor booleano de su elección.
favCar.covertible = true;

//Utilice la consola para registrar todo el objeto favCar.

console.log(favCar);
//[ color: 'blue', covertible: true ]


