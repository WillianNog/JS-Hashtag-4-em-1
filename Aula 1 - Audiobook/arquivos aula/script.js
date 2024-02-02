const botaoPlayPause = document.getElementById('play-pause');
const botaoVoltar = document.getElementById('anterior');
const botaoProximo = document.getElementById('proximo');
const nomeCapitulo = document.getElementById('capitulo')
const audioCapitulo = document.getElementById('audio-capitulo');

let numeroCapitulos = 10;
let taTocando = 0;
let capituloAtual = 1;

function tocarFaixa() {
    audioCapitulo.play();
    botaoPlayPause.classList.remove('bi-play-circle-fill');
    botaoPlayPause.classList.add('bi-pause-circle-fill');
}

function pausarFaixa() {
    audioCapitulo.pause();
    botaoPlayPause.classList.remove('bi-pause-circle-fill');
    botaoPlayPause.classList.add('bi-play-circle-fill');
}

function tocarOuPausar() {
    if (taTocando === 0) {
        tocarFaixa();
        taTocando = 1;
    } else {
        pausarFaixa();
        taTocando = 0;
    }
}

function proximaFaixa() {
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1;
    }else{
    capituloAtual = capituloAtual + 1;
    }
    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`;
    tocarFaixa();
    taTocando = 1;
    nomeCapitulo.innerText = `Capitulo ${capituloAtual}`
}
function voltarFaixa() {
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos
    }else{
    capituloAtual = capituloAtual - 1;
    }
    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`;
    tocarFaixa();
    taTocando = 1;
    nomeCapitulo.innerText = `Capitulo ${capituloAtual}`
}

botaoPlayPause.addEventListener('click',tocarOuPausar);
botaoProximo.addEventListener('click',proximaFaixa);
botaoVoltar.addEventListener('click',voltarFaixa);
