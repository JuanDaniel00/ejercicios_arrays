// 8.	Dado un array de números de 5 posiciones con los siguientes valores {1,2,3,4,5}, guardar los valores de este array en otro array distinto pero con los valores invertidos, es decir, que el segundo array deberá tener los valores {5,4,3,2,1}. 

let array = [1, 2, 3, 4, 5];
let arrayInvertido = [];

for (let i = array.length - 1; i >= 0; i--) {
    arrayInvertido.push(array[i]);
}

console.log(arrayInvertido);