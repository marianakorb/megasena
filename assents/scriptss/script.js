const numJogados = [];

function selecionaNumero(num) {
    // desabilita o numero escolhido
    desabilitarNum(num);
}

function desabilitarNum(num) {
    const n = document.getElementById("num_" + num);
    n.disabled = true;
    n.style.background = "green";
    n.style.color = "white";
}