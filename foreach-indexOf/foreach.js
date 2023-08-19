// foreach( )
// Este método ayuda a recorrer la matriz mediante la ejecución de una función de devolución de 
// llamada proporcionada para cada elemento de una matriz.

// indexOf( )
// Este método devuelve el índice de la primera aparición del elemento especificado en la matriz, o -1
// si no se encuentra.

// Pepita necesita usar un foreach en su lista para mostrar por separado la cantidad de materiales

let materiales = ["Madera", "Piedra", "Gemas", "Elixir", "Oro"];
let cantMateriales = [100, 200, 300, 400, 500];

materiales.forEach(element => {
    console.log(element);
})

// Ahora necesito mostrar por separado la cantidad de materiales que tiene Pepita juntandolo con su respectivo material.

materiales.forEach(element => {
    console.log(element + ": " + cantMateriales[materiales.indexOf(element)]);
});

// Como ultimo pepita necesita imprimir por consola la cantidad de materiales que tiene en total.

let total = 0;

cantMateriales.forEach(element => {
    total += element;

    if (cantMateriales.indexOf(element) == cantMateriales.length - 1) {
        console.log("Total: " + total);
    }

});