// reduce( )
// Este método aplica una función contra un acumulador y cada elemento de la matriz para reducirlo 
// a un solo valor

// Pepita necesita usar el método reduce( ) para sumar todos los elementos de la matriz materiales

const numMateriales = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const suma = numMateriales.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
});

console.log(suma);

// Pepita necesita sumar la cantidad de materiales de su lista

const cantMateriales = [1000, 2000, 3000, 4000, 5000, 6000, 7000];

const total = cantMateriales.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
});

console.log(total);

// Pepita necesita sumar la cantidad de materiales de su lista en 4 semanas y despues dividirla entre 4 para sacar su promedio

const cantMateriales2 = [5043, 2350, 3692, 923];

const total2 = cantMateriales2.reduce((acumulador, valorActual) => {
    return acumulador + valorActual;
});

console.log(total2 / 4);