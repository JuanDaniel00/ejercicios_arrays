//------------ Ejercicios Splice ------------

// Meter datos al inicio del array 1.1

const frutas = ["Manzana", "Banana", "Naranja", "Mango"];

frutas.splice(0, 0, "Pera", "Uva");

console.log(frutas);

// Meter datos al inicio del array 1.2

const animales = ["Perro", "Gato", "Conejo", "Pez"];

animales.splice(0, 0, "Tortuga", "Loro");

console.log(animales);


// Meter datos en una posicion x del array 1.1

const verduras = ["Papa", "Zanahoria", "Cebolla", "Tomate"];

verduras.splice(2, 0, "Lechuga", "Pepino");

console.log(verduras);

// Meter datos en una posicion x del array 1.2


const numeros = [1, 2, 3, 4, 5];

numeros.splice(3, 0, 6, 7);

console.log(numeros);

// Eliminar datos del inicio 1.1

const precio = [120.5, 340.6, 100.7, 90.8, 2.9];

precio.splice(0, 1);

console.log(`${precio} se elimino el primer dato correctamente`);

// Eliminar datos del inicio 1.2

const nombres = ["Juan", "Maria", "Pedro", "Susana", "Pablo"];

nombres.splice(0, 1);

console.log(`${nombres} se elimino el primer dato correctamente`);

// Eliminar datos del inicio 1.3

const edades = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

edades.splice(0, 2);

console.log(`${edades} se eliminaron los dos primeros datos correctamente`);

// Eliminar datos de la posicion x 1.1

const colores = ["rojo", "verde", "azul", "amarillo", "naranja"];

colores.splice(2, 1);

console.log(`${colores} se elimino el dato "Azul" correctamente`);

// Eliminar datos de la posicion x 1.2

const dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];

dias.splice(3, 1);

console.log(`${dias} se elimino el dato "Jueves" correctamente`);

// Eliminar datos de la posicion x 1.3

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"];

meses.splice(4, 1);

console.log(`${meses} se elimino el dato "Mayo" correctamente`);
