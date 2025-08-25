// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigos(){
    let capturaNombres = document.getElementById('amigo').value;
    if (capturaNombres == '') {
        alert('Por favor ingresa un nombre');
    }else if (listaAmigos.includes(capturaNombres)){
        alert('Tu amigo ya esta jugando, por favor ingresa otro nombre');    
    }else{
        listaAmigos.push(capturaNombres);
    }
    limpiarCaja();
    console.log(listaAmigos);
}

function limpiarCaja(){
    document.querySelector('#amigo').value = ''; 
} 