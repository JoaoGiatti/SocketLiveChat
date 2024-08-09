const botaoEnviar = document.getElementById('enviar');
const caixaMensagem = document.getElementById('texto');
const chat = document.getElementById('mensagens');

const socket = io();

botaoEnviar.addEventListener('click', () => {
    if (caixaMensagem.value !== ""){
        socket.emit('nova mensagem', caixaMensagem.value);
        caixaMensagem.value = "";
    }
})

socket.addEventListener('nova mensagem', (msg) => {
    const elementoMensagem = document.createElement('li'); //criar tag <li></li> vazia
    elementoMensagem.textContent = msg; //li da mensagem
    elementoMensagem.classList.add('mensagem') // <li class="mensagem"></li>
    chat.appendChild(elementoMensagem); // <div id="mensagens"><li id="mensagen"></li></div>
})