// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigos(){
    let capturaNombres = document.getElementById('amigo').value;
    let lista = document.getElementById('amigosJugando');
    if (capturaNombres == '') {
        alert('Por favor ingresa un nombre');
        return;
    }else if (listaAmigos.includes(capturaNombres)){
        alert('Tu amigo ya esta jugando, por favor ingresa otro nombre');    
        return;
    }else{
        listaAmigos.push(capturaNombres);
    }
    limpiarCaja();
    lista.innerHTML = '';
    for(let i = 0; i < listaAmigos.length; i++){
        let li = document.createElement('li');
        li.innerText = listaAmigos[i];
        lista.appendChild(li);
    }
}

function limpiarCaja(){
    document.querySelector('#amigo').value = '';
} 

function sortearAmigos(){
    if(listaAmigos.length < 1){
        alert('Por favor ingresa al menos un nombre');
        return;
    }else{
        let resultado = document.getElementById('resultado');
        resultado.innerHTML = '';
        let posicionAmigo = parseInt(Math.floor(Math.random() * listaAmigos.length));
        let amigoSeleccionado = listaAmigos[posicionAmigo]; 
        let li = document.createElement('li');
        li.innerText = `Tu amigo secreto es: ${amigoSeleccionado}`;
        resultado.appendChild(li);
    }
}