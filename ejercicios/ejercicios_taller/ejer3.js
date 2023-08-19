// Concatenar dos arrays A y B de la siguiente forma: A0, B0, A1, B1, A2, B2, …, An, Bn. Los vectores tendrán la misma longitud. 

const a = ["A", "B"];
const b = [0,1,2,3,4,5,6,7,8,9];
let c = [];

for (let i = 0; i < b.length; i++) {
    c.push(a[0]+b[i]);
    c.push(a[1]+b[i]);
}

console.log(c);