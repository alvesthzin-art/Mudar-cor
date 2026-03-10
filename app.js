'use strict'

// Dicionário expandido de cores (Português -> Inglês CSS)
const dicionarioCores = {
    // Cores Básicas
    "amarelo": "yellow",
    "azul": "blue",
    "branco": "white",
    "cinza": "gray",
    "laranja": "orange",
    "marrom": "brown",
    "preto": "black",
    "rosa": "pink",
    "roxo": "purple",
    "verde": "green",
    "vermelho": "red",

    // Variações de Azul
    "azul claro": "lightblue",
    "azul escuro": "darkblue",
    "azul marinho": "navy",
    "azul ceu": "skyblue",
    "azul aço": "steelblue",
    "ciano": "cyan",
    "turquesa": "turquoise",
    "indigo": "indigo",

    // Variações de Verde
    "verde claro": "lightgreen",
    "verde escuro": "darkgreen",
    "verde lima": "lime",
    "verde limao": "lime", // Caso digitem sem til
    "verde floresta": "forestgreen",
    "oliva": "olive",
    "verde mar": "seagreen",

    // Variações de Vermelho/Rosa/Laranja
    "salmao": "salmon",
    "coral": "coral",
    "tomate": "tomato",
    "carmesim": "crimson",
    "fucsia": "fuchsia",
    "magenta": "magenta",
    "rosa choque": "hotpink",
    "rosa claro": "lightpink",

    // Tons de Terra/Amarelo
    "bege": "beige",
    "dourado": "gold",
    "ouro": "gold",
    "prata": "silver",
    "caqui": "khaki",
    "chocolate": "chocolate",
    "trigo": "wheat",
    "marfim": "ivory",

    // Outros
    "violeta": "violet",
    "lavanda": "lavender",
    "ameixa": "plum",
    "orquidea": "orchid"
}

//Serve para chamar ID no JS
const botaoTrocarCor = document.getElementById("trocar-cor")

//Criar Função e coloca uma propriedade para a variável
function trocarCor(){
    // Pega o valor digitado
    const corDigitada = document.getElementById('cor').value
    
    const corFormatada = corDigitada.toLowerCase().trim()

    //Faz a comparação para transformação
    const corFinal = dicionarioCores[corFormatada] || corFormatada

    console.log(`Digitado: ${corDigitada} | Aplicado: ${corFinal}`)     

    document.documentElement.style.setProperty('--corBack-bg--', corFinal)
}


//Adiciona um ação ao botão
botaoTrocarCor.addEventListener('click', trocarCor)