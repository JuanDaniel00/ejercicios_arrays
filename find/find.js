// find()
// Este método devuelve el valor del primer elemento de una matriz que pasa la prueba en una función 
// de prueba

// Pepita necesita saber cual fue la primera cantidad de materiales que supero los 700 y no supero los 1000.

const materiales = [2000, 900, 500, 250, 100];

const findMaterial = materiales.find((material) => material >= 700 && material <= 1000);

console.log("La primera cantidad de materiales que supero los 700 y no supero los 1000 fue: " + findMaterial);



// Pepita necesita saber cual fue la nota de un alumnno quien fue el primero en sacar menos de 10 en el examen de matematicas.

const alumnos = [43, 10, 5, 7, 10, 9, 8, 11, 14, 15];

const findAlumno = alumnos.find((alumno) => alumno < 5);

console.log("La nota del alumno que fue el primero en sacar menos de 10 en el examen de matematicas fue: " + findAlumno);

// Pepita necesita saber cual fue el primer numero par de la lista.

const numeros = [1, 3, 5, 7, 9, 11, 13, 14, 15, 17, 19];

const findNumero = numeros.find((numero) => numero % 2 == 0);

console.log("El primer numero par de la lista fue: " + findNumero);
