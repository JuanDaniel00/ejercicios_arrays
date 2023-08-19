// Llenar un vector con n enteros, despues hallar el mayor, menor y por ultimo la media de todos los numeros ingresados.

let vector = [];
let n = parseInt(prompt("Ingrese la cantidad de numeros que desea ingresar: "));
let numeros = 0;

for (let i = 1; i <= n; i++) {
    numeros = parseInt(prompt("Ingrese un numero: "));
    vector.push(numeros);
}

let contador = 0;
let mayor = vector[0];
let menor = vector[0];

for (let i = 0; i < vector.length; i++) {

    contador += vector[i];

    if (vector[i] > mayor) {
        mayor = vector[i];
    }else if(vector[i] < menor){
        menor = vector[i];
    }

}
const media = contador / vector.length;

console.log(`El numero mayor es: ${mayor}`);
console.log(`El numero menor es: ${menor}`);
console.log(`La media de los numeros ingresados es: ${media}`);