//filter( )
//Este método crea una nueva matriz con solo elementos que pasan la condición dentro de la función 
//proporcionada.

//includes( )
//Este método verifica si una matriz incluye el elemento que pasa la condición, devolviendo verdadero 
//o falso según corresponda.

// Pepita quiere filtrar los recursos que tiene en su lista, para poder ver solo los recursos basicos (Baisico = 1000), pero sin perder la lista original.

const listDay1 = ["Madera ", "Piedra ", "Gemas ", "Elixir ", "Oro "];

const listDay4 = listDay1.map((item) => {
    if (item === "Madera " || item === "Piedra ") {
        return item + "( = 1000 Basico)";
    } else {
        return item + "( = 500 Raro)";
    }
});

const listDay5 = listDay4.filter((item) => {
    if (item.includes("Basico")) {
        return item;
    }
});

console.log("Lista dia 5, de Cantidad de recursos basicos obtenidos; " + listDay5);

// Ahora pepita quiere filtrar los recursos que tiene en su lista, para poder ver solo los recursos raros (Raro = 500), pero sin perder la lista original.

const listDay6 = listDay4.filter((item) => {
    if (item.includes("Raro")) {
        return item;
    }
});
console.log("Lista dia 6, de Cantidad de recursos raros obtenidos; " + listDay6);

// Ahora pepita quiere filtrar solo el primer y ultimo recurso de su lista, pero sin perder la lista original.

const listDay7 = listDay1.filter((item, index) => {
    if (index === 0 || index === listDay1.length - 1) {
        return item;
    }
});

console.log("Lista dia 7, Primer y ultimo material obtenido; " + listDay7);