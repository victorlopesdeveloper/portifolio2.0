function enviarWhats (event){
    event.preventDefault();

    const nome = document.querySelector("#nome");
    const mensagem = document.querySelector("#mensagem");
    const telefone = '5583996458032';

    const texto = `Olá! Me chamo ${nome.value}, ${mensagem.value}`;
    const msgFormatada = encodeURIComponent(texto);

    const url = `https://whatsa.me/${telefone}/?t=${msgFormatada}`;

    window.open(url, '_blank');    
}