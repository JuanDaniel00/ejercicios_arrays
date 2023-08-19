// 7.	Crea un array de números y otro de String de 10 posiciones donde insertaremos notas entre 0 y 10 (debemos controlar que inserte una nota valida), pudiendo ser decimal la nota en el array de números, en el de Strings se insertaran los nombres de los alumnos. 
 
// Después, crearemos un array de String donde insertaremos el resultado de la nota con palabras. 
 
// Si la nota esta entre 0 y 4,99 , será un suspenso 
// Si esta entre 5 y 6,99 , será un bien. 
// Si esta entre 7 y 8,99 será un notable. 
// Si esta entre 9 y 10 será un sobresaliente. 
 
// Muestra por pantalla, el alumno su nota y su resultado en palabras. Crea los métodos que creas conveniente 
 

let arrayNotas = [];
let arrayAlumnos = [];
let arrayResultado = [];
let nota = 0;
let alumno = "";
let resultado = "";

for (let i = 0; i < 10; i++) {

    nota = parseFloat(prompt("Ingrese la nota del alumno: "));
    if (nota >= 0 && nota <= 10) {
        arrayNotas.push(nota);
        alumno = prompt("Ingrese el nombre del alumno: ");
        arrayAlumnos.push(alumno);
    } else {
        alert("La nota ingresada no es valida");
        i--;
    }
}

for (let i = 0; i < arrayNotas.length; i++) {
    if (arrayNotas[i] >= 0 && arrayNotas[i] <= 4.99) {
        resultado = "Suspenso";
    } else if (arrayNotas[i] >= 5 && arrayNotas[i] <= 6.99) {
        resultado = "Bien";
    } else if (arrayNotas[i] >= 7 && arrayNotas[i] <= 8.99) {
        resultado = "Notable";
    } else if (arrayNotas[i] >= 9 && arrayNotas[i] <= 10) {
        resultado = "Sobresaliente";
    }

    arrayResultado.push(resultado);
}

for (let i = 0; i < arrayNotas.length; i++) {
    console.log(`El alumno ${arrayAlumnos[i]} tiene una nota de ${arrayNotas[i]} y su resultado es ${arrayResultado[i]}`);
}