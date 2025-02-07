// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
//Crear las variables que usare.
let ListaDeAmigosParaSorteo = [];//aqui agrego el array que guarda los nombres
let NumeroMaximoSorteo = 10; 



function agregarAmigo(nombre) {
    if (!nombre) {
        console.log("Nombre vacío no se puede agregar")
        return;
    }
    ListaDeAmigosParaSorteo.push(nombre);
    console.log(`✅${nombre} hasido agregado ya a esta lista.`);
}