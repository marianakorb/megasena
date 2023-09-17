const numJogados = [];
const resultado = [];
let qtdAcertos = 0;
const btnAposta = document.querySelector("#btnAposta");
btnAposta.disabled = true;

sortearNumeros();
function sortearNumeros() {
    // sortea o numero do jogo
    for(i = 0; i < 6; i++) {
        let numeroSorteado =  Math.round(Math.random() * 59 + 1 );

        // verifica se o numero sorteado está na lista de sorteados, enquanto existir ele sorteia um novo numero
        while(resultado.includes(numeroSorteado)) {
            let numeroSorteado = Math.round(Math.random() * 59 + 1 );

        }

        resultado.push(numeroSorteado); // insere o numero sorteado na lista 
    }
}

function selecionaNumero(num) {

    if(numJogados.length >= 0 && numJogados.length < 15) {
        numJogados.push(num);
        // desabilita o numero escolhido
        desabilitarNum(num);  
        
        // habilita botão de conferir aposta
        if(numJogados.length > 5){
            btnAposta.disabled = false;

        }
        // mostrar quantidade de numeros apostados
        const qtdApostas = document.querySelector("#qtdApostas");
        qtdApostas.innerHTML = " <span>Qtd. números</span><p class='qtdNum'>" + numJogados.length + "</p>";
        

    }
}

function desabilitarNum(num) {
    const n = document.getElementById("num_" + num);
    n.disabled = true;
    n.style.background = "green";
    n.style.color = "white";
}

function apostar(){
    // fazer a aposta - compara os números sorteados com os apostados
    for(i = 0; i < numJogados.length; i++){
        if(resultado.includes(numJogados[i])){
            qtdAcertos++;
        }

    }
    // mostrar o resultado
    const divResultado = document.querySelector("#resultado-mega");
    for(i = 0; i < resultado.length; i++){
        divResultado.innerHTML += "<div class='res-bolas'>"+ resultado[i] +"</div>";
        console.log(resultado);
    }

    // Mostrar a quantidade de acertos
    let divAcertos = document.getElementById("acertos")
    divAcertos.innerHTML = "<p>Acertos</p><p class='acertos'>" + qtdAcertos + "</p>"

    // desabilitar todos os botões
    desabilitarTodosNumeros();

    // habilitar o botão reiniciar
    //document.getElementById("btnReiniciar").style.display = 'inline';
}

function desabilitarTodosNumeros(){
    for(i = 1; i <= 60; i++){
        document.getElementById("num_"+ i).disabled= true;
    }
}



