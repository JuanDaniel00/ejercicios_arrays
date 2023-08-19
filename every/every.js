//  every( )
// Este método comprueba todos los elementos de la matriz que pasan la condición y devuelve 
// verdadero o falso, según corresponda.

// Pepita necesita saber si todos los estudiantes aprobaron el examen de matemáticas.

const puntajeMat = [10, 7, 8, 9, 5, 8, 10];
const aproboMat = puntajeMat.every((puntaje) => puntaje >= 7);
console.log(aproboMat);

// Pepita necesita saber si todos los estudiantes sacaron más de 5 en el examen de física.

const puntajeFis = [10, 7, 8, 9, 6, 8, 10];
const aproboFis = puntajeFis.every((puntaje) => puntaje > 5);
console.log(aproboFis);

    // Pepita necesita saber si todos los estudiantes sacaron menos de 7 en el examen de química.
const puntajeQui = [10, 10, 10, 9, 8, 10];
const aproboQui = puntajeQui.every((puntaje) => puntaje < 7);
console.log(aproboQui);