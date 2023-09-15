
// adiciona os números 
conferir = () => {

    const txtNumerosJogados = document.querySelector("#numeros").value;
    const numJogados = txtNumerosJogados.split(",");
    console.log(numJogados);
    
    const liJogada = document.querySelector(".lista-mega").getElementsByTagName("li");
      
    for(let i = 0; i < liJogada.length; i++) {
        const li = liJogada[i];
        
        const spanElement = li.querySelector("span"); // Procura um elemento span dentro da li
        if (!spanElement) {
            const arrayNumeros = sortearNumeros(6, 1, 60);
            addNumerosLista(arrayNumeros);
        }
}
}
function addNumerosLista(arrayNumeros) {
    const ulJogada = document.querySelector(".lista-mega");
    const liJogada = ulJogada.getElementsByTagName("li");
    
    for(let i = 0; i < liJogada.length; i++) {
        const li = liJogada[i];
        const spanElement = li.querySelector("span"); // Procura um elemento span dentro da li
      
        if (!spanElement) {
            const novoElemento = document.createElement("span");
            novoElemento.textContent = arrayNumeros[i];
            liJogada[i].appendChild(novoElemento);
        } else {
            break;
        }
    }
    
}

function sortearNumeros(qtdNumeros, min, max) {
    const numerosSorteados = [];
    const numerosDisponiveis = [];
  
    // Inicializa a lista de números disponíveis
    for (let i = min; i <= max; i++) {
      numerosDisponiveis.push(i);
    }
  
    for (let i = 0; i < qtdNumeros; i++) {
      // Sorteia um índice aleatório dentro dos números disponíveis
      const indiceSorteado = Math.floor(Math.random() * numerosDisponiveis.length);
  
      // Adiciona o número sorteado à lista de números sorteados
      numerosSorteados.push(numerosDisponiveis[indiceSorteado]);
  
      // Remove o número sorteado da lista de números disponíveis
      numerosDisponiveis.splice(indiceSorteado, 1);
    }
  
    return numerosSorteados;
  }

  

