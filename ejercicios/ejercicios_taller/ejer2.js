// Dado un vector de enteros, comprobar el mayor, el menor y por último la media de todos.  La lista termina cuando el numero sea negativo o Cero. 

let vector = [];
let n = parseInt(prompt("Ingrese la cantidad de numeros que desee: "));


for (let i = 1; i <= n; i++) {
    let numeros = parseInt(prompt("Ingrese un numero: (0 o negativo para terminar)"));
    if(numeros <= 0){
        break;
    }
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