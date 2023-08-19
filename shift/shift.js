// shift( )
// Este método elimina el primer elemento de una matriz y devuelve ese elemento

// Pepita necesita eliminar el primer elemento de una lista de alumnos

const alumnos = ["Pepita", "Pepito", "Pepitu"];
console.log(alumnos);
console.log(alumnos.shift());
console.log(alumnos);

// Nicolas necesita eliminar el primer elemento de su lista de materiales de construccion

const materiales = ["Ladrillos", "Cemento", "Arena", "Cal", "Hierro"];
console.log(materiales);
console.log(materiales.shift());
console.log(materiales);

// Pedro necesita usar el metodo shift para eliminar el primer elemento de su lista de precios y almacenarlo en una variable

const precios = [10, 20, 30, 40, 50, 60];
console.log(precios);
const primerPrecio = precios.shift();
console.log(primerPrecio);
