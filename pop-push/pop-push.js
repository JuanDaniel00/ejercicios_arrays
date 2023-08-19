//-----------------Ejercicios Pop-----------------

// Ejercicio numero 1 (pop)

const edades = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

edades.pop();

console.log(edades)

// Ejercicio numero 2 (pop)

const nombres = ["Juan", "Maria", "Pedro", "Susana", "Pablo"];

nombreEliminado = nombres.pop();

console.log(`El nombre borrado fue; ${nombreEliminado} y El listado completo es el siguiente ${nombres}`)

// Ejercicio numero 3 (pop)

const precios = [120.5, 340.6, 100.7, 90.8, 2.9];

precioEliminado = precios.pop();

console.log(`El precio eliminado fue: ${precioEliminado} dado que es el mas pequeño y El listado completo es el siguiente ${precios}`)


//-----------------Ejercicios Push-----------------

// Ejercicio numero 1 (push)

const años = [2010, 2011, 2012, 2013, 2014, 2015];

años.push(2016);

console.log(`El listado completo es el siguiente ${años} y el ultimo año añadido es el ${años[5]}`)

// Ejercicio numero 2 (push)

const colores = ["rojo", "verde", "azul", "amarillo", "naranja"];

colores.push("violeta");

console.log(`El listado completo es el siguiente ${colores} y el ultimo color añadido es el ${colores[5]}`)

// Ejercicio numero 3 (push)

const dias = ["lunes", "martes", "miercoles", "jueves", "viernes"];

dias.push("sabado");

console.log(`El listado completo es el siguiente ${dias} y el ultimo dia añadido es el ${dias[5]}`)