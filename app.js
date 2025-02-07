// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear las variables que usare.
let listaDeAmigos = []; // es el array que almacena los nombres 
let maxAmigosSorteo = 10; // aqui podemos límitar nombres que se escriban 

// Crear función para agregar  amigos y lalinea de no se acepta vacios
function agregarAmigo() {
    let inputNombre = document.getElementById("amigo"); // Obtener el input
    let nombre = inputNombre.value.trim(); // Quitar espacios 

    if (!nombre) {
        console.log("No puedes agregar un nombre vacío.");
        return;
    }

    if (listaDeAmigos.length >= maxAmigosSorteo) {
        console.log("Límite de amigos alcanzado.");
        return;
    }

    listaDeAmigos.push(nombre);
    console.log(` ${nombre} ha sido agregado.`);

    actualizarLista(); // con esta linea actualiza la lista 
    inputNombre.value = ""; // Limpia el input después de agregar
}

// Función para actualizar la lista de amigos
function actualizarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; // esta linea es la que se encarga de limpiar la lista

    listaDeAmigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaHTML.appendChild(li);
    });
}
