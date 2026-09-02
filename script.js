const nome = document.querySelector("#nome");
const mensagem = document.querySelector("#mensagem");
const telefone = '5583996458032';

const texto = `Olá! Me chamo ${nome}, ${mensagem}`;
const msgFormatada = encodeURIComponent(texto)