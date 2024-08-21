/**
 * En la línea siguiente, defina una nueva variable, nómbrela day, y ajuste su valor a "Sunday".

Comience a codificar una sentencia switch, pasando la variable day como la expresión a evaluar.

Dentro de switch, añada casos para cada día de la semana, empezando por 'lunes', y terminando por 'domingo'. Asegúrese de utilizar valores de cadena para los días. Dentro de cada caso, por ahora, sólo añada un console.log('Haga algo'), y añada un break; en la línea inferior.

En la parte inferior de la sentencia switch, añada el caso por defecto y añada un console.log('No existe tal día').

Por último, actualice las llamadas console.log para cada caso, en función de la actividad que tenga en cada uno de los días.
 */

var day = "Sunday";

switch (day) { 
    case "Monday": 
        console.log("Today is Monday");
        break;
    case "Tuesday":
        console.log("Today is Tuesday");
        break;
    case "Wednesday":
        console.log("Today is Wednesday");
        break;
    case "Thursday":
        console.log("Today is Thursday");
        break;
    case "Friday":
        console.log("Today is Friday");
        break;
    case "Saturday":
        console.log("Today is Saturday");
        break;
    case "Sunday":
        console.log("Today is Sunday");
        break;
    default:
        console.log("Error: " + day + " is not a day of the week");
        break;
}

var day = new Date().getDay();

switch (day) { 
    case 0: 
        console.log("Today is Sunday");
        break;
    case 1:
        console.log("Today is Monday");
        break;
    case 2:
        console.log("Today is Tuesday");
        break;
    case 3:
        console.log("Today is Wednesday");
        break;
    case 4:
        console.log("Today is Thursday");
        break;
    case 5:
        console.log("Today is Friday");
        break;
    case 6:
        console.log("Today is Saturday");
        break;
    default:
        console.log("Error: " + day + " is not a valid day of the week");
        break;
}