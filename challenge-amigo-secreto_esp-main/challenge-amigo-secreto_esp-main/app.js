let amigos = [];

function mostrarAlerta(mensaje) {
    const alerta = document.createElement("div");
    alerta.textContent = mensaje;
    alerta.style.position = "fixed";
    alerta.style.top = "20px";
    alerta.style.left = "50%";
    alerta.style.transform = "translateX(-50%)";
    alerta.style.backgroundColor = "#fe652b";
    alerta.style.color = "white";
    alerta.style.padding = "10px 20px";
    alerta.style.borderRadius = "10px";
    alerta.style.boxShadow = "0 4px 6px rgba(0,0,0,0.1)";
    alerta.style.fontSize = "16px";
    alerta.style.zIndex = "1000";
    document.body.appendChild(alerta);
    
    setTimeout(() => {
        alerta.remove();
    }, 2000);
}

function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim();
    
    // Validar que el campo no esté vacío
    if (!nombre) {
        mostrarAlerta("Por favor, inserte un nombre.");
        return;
    }
    
    // Verificar si el nombre ya está en la lista
    if (amigos.includes(nombre)) {
        mostrarAlerta("El nombre ya está en la lista.");
        return;
    }
    
    // Añadir el nombre al array
    amigos.push(nombre);
    actualizarLista();
    
    // Limpiar el campo de entrada
    input.value = "";
}

function actualizarLista() {
    const lista = document.getElementById("listaAmigos");
    
    // Limpiar la lista existente
    lista.innerHTML = "";
    
    // Iterar sobre el arreglo y agregar elementos a la lista
    for (let nombre of amigos) {
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        mostrarAlerta("No hay amigos en la lista para sortear.");
        return;
    }
    
    if (amigos.length < 2) {
        mostrarAlerta("Debes agregar al menos dos amigos para sortear.");
        return;
    }
    
    let asignados;
    do {
        asignados = [...amigos].sort(() => Math.random() - 0.5);
    } while (asignados.some((nombre, i) => nombre === amigos[i]));
    
    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const nombreSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado en el elemento correspondiente
    document.getElementById("resultado").innerHTML = `El amigo sorteado es: <strong>${nombreSorteado}</strong>`;
}
