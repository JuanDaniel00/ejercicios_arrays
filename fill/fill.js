// fill( )
// Este método llena los elementos de una matriz con un valor estático y devuelve la matriz modificada

// Pepita quier usar el metodo fill( ) para llenar una lista de 10 elementos con el valor 0

const lista = new Array(10);
console.log(lista);
console.log(lista.fill(0));

// Pepita necesita llenar una lista de unos alumnos con el valor "Sin nombre"

const alumnos = ["Pepita", "Pepito", "Pepitu"];
console.log(alumnos);
console.log(alumnos.fill("Sin nombre"));

// Pepito necesita rellenar una lista de 10 elementos con el valor "Sin nombre" pero a partir de la posicion 5

const alumnos2 = ["Pepita", "Pepito", "Pepitu", "Juanita", "Juanito", "Juanitu", "Maria", "Mario", "Mariu"];

console.log(alumnos2);

console.log(alumnos2.fill("Sin nombre", 5));

// Pepita necesita rellenar una lista de 10 elementos con el valor "Sin nombre" pero a partir de la posicion 5 hasta la posicion 8 y de la 9 a la 10 con el valor "Sin apellido"

const alumnos3 = ["Pepita", "Pepito", "Pepitu", "Juanita", "Juanito", "Juanitu", "Maria", "Mario", "Mariu", "Mariano"];

console.log(alumnos3);

console.log(alumnos3.fill("Sin nombre", 5, 8));

console.log(alumnos3.fill("Sin apellido", 8));