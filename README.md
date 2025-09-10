<h1>Juego amigo secreto</h1>

Pequeña web interactiva para organizar un amigo secreto: permite ingresar nombres, visualizarlos en pantalla y sortear uno aleatoriamente. Está pensada como un ejercicio de lógica y manipulación del DOM en JavaScript, con estilos sencillos y accesibilidad básica.

✨ Descripción rápida

La aplicación tiene tres componentes principales:

Un formulario para añadir nombres.

Una lista (<ul>) donde se muestran los nombres añadidos.

Un botón para sortear un nombre aleatorio y mostrar el resultado en pantalla.

Estructura del proyecto y archivos principales: index.html (estructura), app.js (lógica) y style.css (estilos). 

index

 

app

 

style

🛠 Funcionalidades

Añadir un nombre desde el campo de texto (agregarAmigo()).

Evitar entradas vacías (alerta si el campo está vacío).

Evitar nombres duplicados (alerta si el nombre ya existe).

Mostrar la lista de amigos en pantalla como elementos <li> (función mostrarAmigosEnPantalla()).

Sortear un amigo aleatoriamente con Math.random() + Math.floor() (función sortearAmigo()).

Al sortear: limpiar la lista visual de nombres y mostrar el resultado dentro del contenedor #resultado. 

app

📁 Archivos importantes

index.html — estructura HTML, inputs, botones y enlaces a assets y script (defer). Contiene los elementos con id="amigo", id="listaAmigos" y id="resultado". 

index

app.js — lógica principal: agregarAmigo(), mostrarAmigosEnPantalla(listaDeAmigos) y sortearAmigo(). Validaciones y manipulación del DOM. 

app

style.css — variables de color, diseño del banner, estilos del input, lista y botón de sortear. Contiene clases para .result-list (texto en verde) y .button-draw. 

style

assets/ — imágenes usadas en la UI (ej. amigo-secreto.png, play_circle_outline.png).

🚀 Cómo ejecutar y usar (local)
Requisitos

Un navegador moderno (Chrome, Firefox, Edge).

Los archivos en una carpeta local: index.html, app.js, style.css y la carpeta assets/.

Abrir localmente (método simple)

Abre index.html en tu navegador (doble clic).

En el campo escribe un nombre → pulsa Añadir.

Repite hasta ingresar todos los nombres deseados.

Pulsa Sortear amigo — si la lista está vacía verás una alerta; si hay nombres se mostrará el amigo sorteado y la lista visual se limpiará.

🔎 Comportamiento técnico (resumen)

Agregar: agregarAmigo() toma el valor de #amigo, valida vacío y duplicados, hace listaAmigos.push(...) y actualiza la UI con mostrarAmigosEnPantalla(listaAmigos). 

app

Mostrar: mostrarAmigosEnPantalla(listaDeAmigos) vacía #listaAmigos (innerHTML = '') y crea <li> por cada nombre (uso de createElement + textContent para seguridad). 

app

Sortear: sortearAmigo() valida que el array no esté vacío, calcula índice aleatorio con Math.floor(Math.random() * listaAmigos.length), obtiene el nombre y muestra el resultado en #resultado. Además limpia la visual #listaAmigos para que desaparezcan los nombres (comportamiento que deseas). 

app

✅ Buenas prácticas y sugerencias de mejora

Accesibilidad: ya se usa aria-live="polite" en el contenedor de resultados; podrías añadir aria-label más descriptivos en botones y estados. 

index

Persistencia: si quieres mantener la lista entre recargas, guarda listaAmigos en localStorage.

Mejor UX: deshabilitar el botón "Sortear" hasta haber agregado al menos 2 nombres; animaciones al mostrar el ganador.

Evitar inyección: ya usas textContent al crear <li>, lo cual es seguro frente a inyección HTML. 

app

📚 Dónde encontrar ayuda / reportar problemas

Issues: crear un issue en el repositorio de GitHub con título y pasos para reproducir.

Pull Requests: si mejoras la lógica, estilos o accesibilidad, envía un PR con descripción y pruebas.

Contacto: agrega tus datos en la sección Authors (más abajo) o incluye un MAINTAINERS.md si quieres distribuir responsabilidad.

🤝 Contribuir

Haz fork del repositorio.

Crea una rama (git checkout -b mejora/nombre).

Haz commits claros y descriptivos.

Abre un Pull Request explicando el cambio.

👨‍💻 Autores

Argenis Hernández Peralta — autor / desarrollador principal (creador del ejercicio y del código enviado).
