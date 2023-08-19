// Dado un número entero n, retorne un array con todos los números enteros en orden decreciente desde n a 1. 

let n = parseInt(prompt("Ingrese un numero: "));
let vector = [];

for (let i = n; i >= 1; i--) {
    vector.push(i);
}

console.log(vector);
