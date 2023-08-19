// 5.	Programa que llene un array con 10 números enteros que se leen por teclado. A continuación, calcula y muestra la media de los valores positivos y la de los valores negativos del array. 

let array = [];
let mediaPositivos = 0;
let mediaNegativos = 0;
let contPositivos = 0;
let contNegativos = 0;

for (let i = 0; i < 10; i++) {
    array.push(parseInt(prompt("Ingrese un numero: ")));

    if (array[i] > 0) {
        mediaPositivos += array[i];
        contPositivos++;
    } else {
        mediaNegativos += array[i];
        contNegativos++;
    }
}

mediaPositivos /= contPositivos;
mediaNegativos /= contNegativos;

console.log(`La media de los numeros positivos es: ${mediaPositivos}`);
console.log(`La media de los numeros negativos es: ${mediaNegativos}`);
