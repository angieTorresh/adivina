
let intentos = 0;
let numerosAdivinados = [];
let max = parseInt(prompt('Ingresa el número máximo: '))

function asignarTexto(elemento,texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

function genNum() {
    let numeroSec = parseInt(Math.random()*max)+1;
    console.log(numeroSec)
    console.log(numerosAdivinados);
    if (numerosAdivinados.length == max) {
        console.log('clear')
        numerosAdivinados = [];
        return genNum();
    } else {
        if (numerosAdivinados.includes(numeroSec)) {
            console.log('está')
            return genNum();
        } else {
            console.log('no está')
            numerosAdivinados.push(numeroSec);
            return numeroSec;
        }
    }
}

function intento() {
    let numeroUser = document.getElementById('numeroUser').value;
    if (numeroUser == numeroSec) {
        asignarTexto('p',`Acertaste en ${intentos} ${intentos == 1 ? 'intento':'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUser > numeroSec) {
            asignarTexto('p', 'El número es más pequeño');
        } else {
            asignarTexto('p','El número es más grande.')
        }
        intentos++;
        clear();
    }
}

function clear() {
    document.querySelector('#numeroUser').value = '';
}

function restart() {
    asignarTexto('h1','Adivina el número secreto');
    asignarTexto('p',`Ingresa un número del 1 al ${max}`);
    numeroSec = genNum();
    intentos = 1;
}

function newGame() {
    clear();
    restart();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

restart();
