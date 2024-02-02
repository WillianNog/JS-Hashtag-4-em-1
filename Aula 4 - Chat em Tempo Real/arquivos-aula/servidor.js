const express = require('express');
const http = require('http');
const aplicacao = express();

const servidorHttp = http.createServer(aplicacao);
const io = require('socket.io')(servidorHttp);

io.addListener('connection',(socket)=>{
    console.log('Um usuario conectou')
    socket.addListener('nova mensagem', (msg)=> {
        io.emit('nova mensagem', msg);
    })
});

() => {
    return
}

aplicacao.use(express.static('public'));



servidorHttp.listen(1000, '192.168.0.17');


