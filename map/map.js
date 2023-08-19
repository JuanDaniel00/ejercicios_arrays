//map( )
//Este método crea una nueva matriz con los resultados de llamar a una función proporcionada en 
//cada elemento de esta matriz.


// Pepita necesita añadir un x2 a cada elemento de sus recursos de un juego en su lista, pero sin perder la original.

const listDay1 = ["Madera ", "Piedra ", "Gemas ", "Elixir ", "Oro "];
const listDay2 = listDay1.map((item) => item + " x2 ");
console.log("Lista dia uno de materiales obtenidos; " + listDay1);
console.log("Lista dia 2, de recursos x2; " + listDay2);

// Ahora pepita quiere mejorar su lista de recursos, pero solo quiere editar los recursos basicos del dia 1 (Madera y Piedra) y no los demas. A estos recursos le añadira el comentario de cuanta cantidad tiene.

const listDay3 = listDay1.map((item) => {
    if (item === "Madera " || item === "Piedra ") {
        return item + "= 1000";
    } else {
        return item;
    }
});
console.log("Lista dia 3, de Cantidad de recursos basicos obtenidos; " + listDay3);

// Ahora quiere añadirle a todos los recursos un comentario de que son recursos basicos o raros, y cuantos materiales tiene en total de estos dependiendo su rareza 1000 = basico, 500 = Raro, pero sin perder la lista original.

const listDay4 = listDay1.map((item) => {
    if (item === "Madera " || item === "Piedra ") {
        return item + "= 1000 (Basico)";
    } else {
        return item + "= 500 (Raro)";
    }
});
console.log("Lista dia 4, de Cantidad de recursos basicos y raros obtenidos; " + listDay4);