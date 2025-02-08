// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//variables principales
let listaDeAmigos = []; //array creado para guardar nombres
let maxAmigosSorteo = 10; // Número máximo de amigos permitidos 

// Función para mostrar mensajes, estos mensajes se veran en la pantalla y se quitaran en unos seundos
function mostrarMensaje(texto, tipo) {
    let mensaje = document.getElementById("mensaje");
    mensaje.textContent = texto;
    mensaje.style.color = tipo === "error" ? "purple" : "green";

    setTimeout(() => {
        mensaje.textContent = "";
    }, 3000);
}

// con estas lineas podemos agregar la lista de amigos
function agregarAmigo() {
    let inputNombre = document.getElementById("amigo"); // se obtiene el imput
    let nombre = inputNombre.value.trim();  

    // Validaciones, es decir que nos ayuda a que no se agregue algo no escrito,y te dice el limite de nombres
    if (!nombre) {
        mostrarMensaje(" No puedes agregar un nombre vacío.", "error");
        return;
    }

    if (listaDeAmigos.length >= maxAmigosSorteo) {
        mostrarMensaje(" Límite de amigos alcanzado 10.", "error");
        return;
    }

    // Agregar nombre a la lista
    listaDeAmigos.push(nombre);
    mostrarMensaje(`${nombre} ha sido agregado a la lista.`, "success");

    actualizarLista(); // Actualiza la lista en el HTML
    inputNombre.value = ""; // Limpia el input después de agregar
}

// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {
    let listaHTML = document.getElementById("listaAmigos");
    listaHTML.innerHTML = ""; // Limpia la lista antes de volver a llenarla

    listaDeAmigos.forEach((nombre) => {
        let li = document.createElement("li");
        li.textContent = nombre;
        listaHTML.appendChild(li);
    });
}

// valida si hay amigos o no  para sortear  al azar
function sortearAmigo() {
    if (listaDeAmigos.length === 0) {
        mostrarMensaje(" No hay amigos en la lista para sortear.", "error");
        return;
    }

    // Lineas para el sorteo y elegir un amigo al azar
    let indiceAleatorio = Math.floor(Math.random() * listaDeAmigos.length);
    let amigoSorteado = listaDeAmigos[indiceAleatorio];

    // Mostrar el nombre del amigo sorteado en la pantalla
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li> ¡El amigo secreto es: <strong>${amigoSorteado}</strong>! </li>`;

    mostrarMensaje(`Se ha sorteado a ${amigoSorteado}!`, "success");
}
