//concat( )
//Este método se usa para fusionar dos o más matrices y devuelve una nueva matriz, sin cambiar las 
//matrices existentes.

// pepita necesita concatenar sus dos listas (semana1 y semana2) de materiales para poder mostrarlos en una sola lista.

let semana1 = ["Madera", "Piedra", "Gemas", "Elixir", "Oro"];
let semana2 = ["Esmeralda", "Agua", "Polvo Magico", "Chatarra", "Madera"];

console.log(semana1.concat(semana2));

// Ahora pepita necesita concatenar sus dos listas (semana1, semana2 y semana3) de materiales para poder mostrarlos en una sola lista.

let semana3 = ["Madera", "Roca", "Cuero", "Elixir", "Plata"];

console.log(semana1.concat(semana2, semana3));

// Pepita necesita concatenar sus materiales de forma intercalada sus listas de materiales para poder mostrarlos en una sola lista.

let semana4 = ["Madera", "Roca", "Cuero", "Elixir", "Plata"];

let totalMateriales = semana1.concat(semana2, semana3, semana4);

console.log(totalMateriales);