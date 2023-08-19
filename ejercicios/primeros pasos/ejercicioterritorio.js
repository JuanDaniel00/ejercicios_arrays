// prueba
//
// # Vamos a crear una lista que emplearemos para gestionar la lista de espera de un vuelo de la compañía Python Airlines.
// # >>> lista_espera = ['Luis Luisero', 'Pedro Pedrete', 'Javier Javiercín', 'Rosa Rosae']
// # Si quedan vacantes, Luis será el primero con derecho a ocupar una plaza, seguido de Pedro. Rosa lo va a tener algo más difícil, pues está la última en la cola.
// # Llega una nueva usuaria, Marta Martínez, y se le informa que debe permanecer en lista de espera, pero que aún tiene a cuatro personas por delante.
// # 1 --> Como inscribir Marta ????????????
// # 2 --> Comprueben que la inscribieron
// # Pero lo va a tener realmente complicado. Al parecer hay rumores de que sólo habrá tres vacantes, aunque no se pierde nada por intentarlo.
// # De repente llega al mostrador de facturación una conocida del piloto. La meterán en lista de espera, para ser discretos, pero en una posición que asegure que cogerá el avión.
// # Debemos asegurarnos que esté de terceras en la cola. (splice)
// # 3 --> Como nos asegurarnos que esté de terceras en la cola?
// # 2 --> Comprueben que que realmente quedo de terceras
// # Volar volará, pero no hay derecho…

let listaEspera = ['Luis Luisero', 'Pedro Pedrete', 'Javier Javiercín', 'Rosa Rosae']

listaEspera.push('Marta Martínez');
console.log(listaEspera);

listaEspera.splice(2, 0, 'Conocida del piloto');
console.log(listaEspera);


