// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// variable que contiene una lista donde se almacenan los amigos ingresados
let listaAmigos = [];

// Funcion que permite ingresar un nombre en el campo y lo agrega a la lista
function agregarAmigo() {

    // Permite al usuario ingresar un nombre en el campo de texto
    let amigo = document.getElementById('amigo').value;
    
    // Validar entradas
    if (amigo === "") {
        // si no se inserta un nombre y le da agregar nombre, muestra el mensaje
        alert('Por favor, inserte un nombre');
    
    } else {
            if (listaAmigos.includes(amigo)) {
                alert('Ese nombre ya esta en la lista, agregue otro');

                // restablecer el campo de texto a una cadena vacia
                let limpiar = document.querySelector('#amigo');
                limpiar.value = '';
                return;
            } else {
            // si se inserta un nombre, sera agregado a la lista de amigos y lo devuelve
            listaAmigos.push(amigo);
        // console.log(listaAmigos);

            // restablecer el campo de texto a una cadena vacia
            limpiar = document.querySelector('#amigo');
            limpiar.value = '';
            
            // Actualizar la lista en pantalla
            mostrarAmigosEnPantalla(listaAmigos);
        }
    }
}

function mostrarAmigosEnPantalla(listaDeAmigos) {
    //Obtener la referencia al elemento <ul> donde vamos a mostrar los nombres
    let lista = document.getElementById('listaAmigos');

    // Limpiar cualquier contenido HTML previo dentro del <ul>
    lista.innerHTML = '';
    
    // Iterar la lista de listaDeamigos y crear <li> por cada elemento
    listaDeAmigos.forEach(nombre => {
        // Crear un nuevo elemento <li> vacío en memoria
        let li = document.createElement('li');

        // mostrar el nombre en pantalla dentro del <li>
        li.textContent = nombre;
        
        // Insertar el <li> recién creado al final del <ul> en el DOM
        lista.appendChild(li);
    });
}


mostrarAmigosEnPantalla(listaAmigos);
