// slice( )
// Este método devuelve una nueva matriz con elementos especificados de principio a fin.

// Pepita necesita obtener una lista de alumnos de la posicion 5 a la 8

const alumnos = ["Pepita", "Pepito", "Pepitu", "Juanita", "Juanito", "Juanitu", "Maria", "Mario", "Mariu", "Mariano"];
console.log(alumnos);
console.log(alumnos.slice(5, 8));

// Pepita necesita obtener una lista de alumnos de la posicion 5 hasta el final 

console.log(alumnos.slice(5));

// Pepita necesita obtener una lista de alumnos de la posicion 5 hasta el final y que el ultimo elemento sea "Sin nombre"

console.log(alumnos.slice(5).fill("Sin nombre", -1));
