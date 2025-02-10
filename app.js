let amigos = [];
console.log(amigos);

function recorrerLista (){
    let listaAmigosHTML = document.getElementById('listaAmigos');
    listaAmigosHTML.innerHTML = '';
    for (let i = 0; i < amigos.length; i++) {
        let nuevoElemento = document.createElement('li');
        nuevoElemento.textContent = amigos[i];
        listaAmigosHTML.appendChild(nuevoElemento);
    }
}

function asignarTextoElemento(elemento,texto){
    let elementohtml = document.querySelector(elemento);
    elementohtml.innerHTML = texto;
    return;
}

function agregarAmigo() {
    let nombreAmigo = document.getElementById('amigo').value;
    if (nombreAmigo == "") {
        alert("Por favor, inserte un nombre.");
    } else if (amigos.includes(nombreAmigo)){
        alert("El nombre ya se encuentra en la lista");
    }else {
        amigos.push(nombreAmigo);
        console.log(amigos);         
        recorrerLista();
        limpiarCaja();
    }
    return
}

function sortearAmigo(){
    if (amigos.length < 2){
        alert("Debe agregar al menos 2 amigos");
    } else {
    let amigoSeleccionado = amigos[Math.floor(Math.random()*amigos.length)];
    asignarTextoElemento("#resultado",`El amigo secreto es: ${amigoSeleccionado}`)
    amigos = amigos.filter(amigo => amigo !== amigoSeleccionado);
    recorrerLista();
        }
    return;
    

}


function reiniciarJuego(){
    amigos = [];
    recorrerLista();
    asignarTextoElemento("#resultado", "");
    limpiarCaja();
}
function limpiarCaja() {
    document.getElementById('amigo').value = '';
}