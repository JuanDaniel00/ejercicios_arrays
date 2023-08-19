// findIndex( )
// Este método devuelve el índice del primer elemento de una matriz que pasa la prueba en una 
// función de prueba.

// Pepita quiere saber en que posicion de la lista se encuentra el primer numero par.

const numeros = [1, 3, 5, 7, 9, 11, 13, 14, 15, 17, 19];

const findIndexNumero = numeros.findIndex((numero) => numero % 2 == 0);

console.log("El primer numero par de la lista se encuentra en la posicion: " + findIndexNumero);

// Pepita quiere saber en que posicion de la lista se encuentra el primer numero impar.

const numeros2 = [2, 4, 6, 8, 10, 12, 14, 14, 17, 19];

const findIndexNumero2 = numeros2.findIndex((numero) => numero % 2 != 0);

console.log("El primer numero impar de la lista se encuentra en la posicion: " + findIndexNumero2);

// Pepita quiere saber en que posicion esta el material "Oro" en su lista

const materiales = ["Madera", "Piedra", "Oro", "Diamante"];

const findIndexMaterial = materiales.findIndex((material) => material == "Oro");

console.log("El material Oro se encuentra en la posicion: " + findIndexMaterial);