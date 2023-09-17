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
             numeroSorteado = Math.round(Math.random() * 59 + 1 );

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
        } else {
            const n = document.getElementById("num_" + numJogados[i]);
            n.style.background = "red";
        }

    }
    // mostrar o resultado
    const divResultado = document.querySelector("#resultado-mega");
    for(i = 0; i < resultado.length; i++){
        divResultado.innerHTML += "<div class='res-bola'>"+ resultado[i] +"</div>";
        console.log(resultado);
    }

    // Mostrar a quantidade de acertos
    let divAcertos = document.getElementById("acertos");
    divAcertos.innerHTML = "<span>Acertos</span><p class='acertos'>" + qtdAcertos + "</p>";

    const ganhou = document.querySelector("#ganhou");
    if(qtdAcertos == 6) {
        ganhou.innerHTML = "<p class='mensagem'>Parabéns! Você está milionário(a)</p>"
    } else {
        ganhou.innerHTML = "<p class='mensagem'>Não foi dessa vez.</p>"
    }

    // desabilitar todos os botões
    desabilitarTodosNumeros();

   
    
}

function desabilitarTodosNumeros(){
    for(i = 1; i <= 60; i++){
        document.getElementById("num_"+ i).disabled= true;
    }
}

let btn = document.querySelector("#btnReiniciar");
btn.addEventListener("click", function(){
    location.reload();
});



