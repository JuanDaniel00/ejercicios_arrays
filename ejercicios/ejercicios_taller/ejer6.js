// 6.	Programa que llene un array con la altura de N personas y calcular la altura media. Calcular cuántas personas tienen una altura superior a la media y cuántas tienen una altura inferior a la media. El valor de N se pide por teclado y debe ser entero positivo. 

let alturaPersonas = [];
let n = parseInt(prompt("Ingrese la cantidad de personas: "));
let altura = 0;
let acuAltura = 0;
let media = 0;
let contMayor = 0;
let contMenor = 0;

for (let i = 0; i < n; i++) {
    altura = parseInt(prompt("Ingrese la altura de la persona: "));
    alturaPersonas.push(altura);
    acuAltura += alturaPersonas[i];
}

media = acuAltura / alturaPersonas.length;

for (let i = 0; i < alturaPersonas.length; i++) {
    if (alturaPersonas[i] > media) {
        contMayor++;
    } else {
        contMenor++;
    }
}

console.log(`La media de las alturas es: ${media}`);
console.log(`La cantidad de personas que superan la media son: ${contMayor}`);
console.log(`La cantidad de personas que no superan la media son: ${contMenor}`);

