// some( )
// Este método verifica si al menos un elemento en la matriz pasa la condición, devolviendo verdadero 
// o falso según corresponda.

// indexOf( )
// Este método devuelve el índice de la primera aparición del elemento especificado en la matriz, o -1
// si no se encuentra.

// Pepita necesita saber si tiene en su lista el material "Gemas" y en que posicion se encuentra.

let materiales = ["Madera", "Piedra", "Gemas", "Elixir", "Oro"];

const findMaterial = materiales.some((material) => material == "Gemas");
console.log("¿Tiene Gemas?: " + findMaterial);

if (findMaterial) {
    console.log("Gemas se encuentra en la posicion: " + materiales.indexOf("Gemas"));
}

// Pepita necesita saber si tiene en su lista el material "Elixir" y en que posicion se encuentra.

const findMaterial2 = materiales.some((material) => material == "Elixir");
console.log("¿Tiene Elixir?: " + findMaterial2);

if (findMaterial2) {
    console.log("Elixir se encuentra en la posicion: " + materiales.indexOf("Elixir"));
}

// Pepita necesita saber si tiene en su lista el material "Metal" y en que posicion se encuentra.

const findMaterial3 = materiales.some((material) => material == "Metal");

console.log("¿Tiene Metal?: " + findMaterial3);

if (findMaterial3) {
    console.log("Metal se encuentra en la posicion: " + materiales.indexOf("Metal"));
}
