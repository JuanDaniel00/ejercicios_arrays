//sort( )
//Este método se utiliza para organizar/ordenar los elementos de la matriz en orden ascendente o 
//descendente

//includes( )
//Este método verifica si una matriz incluye el elemento que pasa la condición, devolviendo verdadero 
//o falso según corresponda.

// Pepita necesita organizar su lista de recursos de forma ascendente, pero sin perder la lista original.

const listDay1 = ["Madera ", "Piedra ", "Gemas ", "Elixir ", "Oro "];

const listDay2 = listDay1.sort((a, b) => {
    if (a > b) {
        return 1;
    } else {
        return -1;
    }
});
console.log("Lista dia 2, de forma ascendente; " + listDay2);

// Pepita necesita organizar su lista de recursos de forma descendente, pero sin perder la lista original.

const listDay3 = listDay1.sort((a, b) => {
    if (a < b) {
        return 1;
    } else {
        return -1;
    }
});

console.log("Lista dia 3, de forma descendente; " + listDay3);


// Pepita necesita organizar su lista de manera que los recursos raros esten primeros y los comunes al final, pero sin perder la lista original.

const listRaroBasico = listDay1.map((item) => {
    if (item === "Madera " || item === "Piedra ") {
        return item + "( = 1000 Basico)";
    } else {
        return item + "( = 500 Raro)";
    }
});

const listDay4 = listRaroBasico.sort((a) => {
    if (a.includes("Basico")) {
        return 1;
    } else {
        return -1;
    }
});

console.log("Lista dia 4, de materiales Raros a Basicos; " + listDay4);