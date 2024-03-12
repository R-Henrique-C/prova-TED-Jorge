export function criarPilha(size = 10){
    return[...new Array(size)]
}

export function inserirPilha(pilha, livro){
    const posPilha = pilha.indexOf(undefined)
    if(posPilha !== -1){
        for(let i = 0; i < pilha.length; i++){
            pilha.push(livro)
        }
        
    }

    return "Algo deu errado"
}