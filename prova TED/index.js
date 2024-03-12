import { criarPilha, inserirPilha, } from './pilha.js'
// Objeto exemplo
let livro = [
    {
        titulo: "Dom Casmurro",
        paginas: 300,
        genero: "clássico",
    },
    {
        titulo: "IT a coisa",
        paginas: 150,
        genero: "terror",
    },
    {
        titulo: "Jason",
        paginas: 70,
        genero: "terror",
    },
    {
        titulo: "Chapéuzinho Vermelho",
        paginas: 10,
        genero: "clássico",
    },
    {
        titulo: "Histórinhas de terror para crianãs",
        paginas: 50,
        genero: "clássico",
    },
]

const size = 5
let pilha = criarPilha(size)

inserirPilha(pilha, livro)


// retirarPilha(pilha, livro)
// // ,,,
// verificaExistencia(pilha, tituloDoLivro)