// unshift( )
// Este método agrega uno o más elementos al comienzo de una matriz y devuelve la nueva longitud 
// de la matriz.

// Pepita necesita agregar un alumno al principio de una lista de alumnos

const alumnos = ["Pepita", "Pepito", "Pepitu"];
console.log(alumnos);
alumnos.unshift("Joana");
console.log(alumnos);

// Nicolas necesita agregar un material al principio de su lista de materiales de construccion 

const materiales = ["Ladrillos", "Cemento", "Arena", "Cal", "Hierro"];

console.log(materiales);
materiales.unshift("Madera");
console.log(materiales);

// Pedro necesita agregar un precio al principio de su lista de precios y almacenar la nueva longitud en una variable

const precios = [10, 20, 30, 40, 50, 60];

console.log(precios);
const nuevaLongitud = precios.unshift(8);
console.log(precios);