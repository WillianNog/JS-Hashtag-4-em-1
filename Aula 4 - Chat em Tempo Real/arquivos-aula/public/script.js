// script.js

import { filtroPalavroes } from "./filtroPalavroes.js";

const botaoEnviar = document.getElementById('enviar');
const caixaMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

botaoEnviar.addEventListener('click', () => {
    if (caixaMensagem.value !== "") {
        EnviarMensagem();
    }
});

caixaMensagem.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        if (caixaMensagem.value !== "") {
            EnviarMensagem();
        } 
    }
});

function EnviarMensagem() {
    let mensagem = caixaMensagem.value;
    mensagem = filtroPalavroes(mensagem); // Atribuir o resultado da filtragem

    socket.emit('nova mensagem', mensagem);
    setTimeout(() => {
        rolarParaBaixo();
    }, 100);
    caixaMensagem.value = "";
}

socket.addEventListener('nova mensagem', (msg) => {
    const elementoMensagem = document.createElement('li');
    elementoMensagem.textContent = msg;
    elementoMensagem.classList.add('mensagem');
    chat.appendChild(elementoMensagem);
});

// Adicione esta função onde você está adicionando mensagens ao seu chat
function rolarParaBaixo() {
    var mensagensElement = document.getElementById('mensagens');
    mensagensElement.scrollTop = mensagensElement.scrollHeight;
}
