let chavesCriptografar = {
    "a": "ai",
    "e": "enter",
    "i": "imes",
    "o": "ober",
    "u": "ufat",
}

let chavesDescriptografar = {
    "ai": "a",
    "enter": "e",
    "imes": "i",
    "ober": "o",
    "ufat": "u"
}

function criptografar() {
    let texto = document.querySelector("textarea").value
    let textoCriptografado = texto.replace(/a|e|i|o|u/g, function(codigo){
        return chavesCriptografar[codigo]
    })
    apresentarResultado(textoCriptografado)
}

function descriptografar() {
    let texto = document.querySelector("textarea").value
    let textoDescriptografado = texto.replace(/ai|enter|imes|ober|ufat/g, function(codigo){
        return chavesDescriptografar[codigo]
    })
    apresentarResultado(textoDescriptografado)
}

function apresentarResultado(resultado) {
    let imagem = document.querySelector(".imagem");
    let subtitulo = document.querySelector(".subtitulo_mensagem");
    let mensagem = document.querySelector(".mensagem");
    let organizar = document.querySelector(".apresentar_resultado");
    let botaoCopiar = document.querySelector(".copiar");

    imagem.style.display = "none";
    subtitulo.style.display = "none";
    organizar.style.alignItems = "flex-start";
    organizar.style.textAlign = "left";

    mensagem.innerHTML = resultado;
    mensagem.style.fontSize = "24px";
    mensagem.style.wordWrap = "break-word";

    botaoCopiar.style.display = "block";
    botaoCopiar.style.color = "black"
    botaoCopiar.title = "copiar";
}

function copiar() {
    let botaoCopiar = document.querySelector(".copiar");
    botaoCopiar.title = "copiado"
    botaoCopiar.style.color = "blue"

    let copiarTexto = document.querySelector(".mensagem").textContent;

    navigator.clipboard.writeText(copiarTexto).then(function() {
        console.log('Texto copiado com sucesso!');
    }).catch(function(err) {
        console.error('Erro ao copiar texto: ', err);
    });
}