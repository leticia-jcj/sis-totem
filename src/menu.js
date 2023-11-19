const itens = [
    {
        id: 'suco-tropical-1',
        title: "Suco Tropical 350ml",
        descricao: "Mix de frutas da estação (antioxidante).",
        preco: "6,99 "
    },
    {
        id: 'creme-de-morango-1',
        title: "Creme de Morango 350ml",
        descricao: "Morango, leite e leite condensado.",
        preco: "6,99 "
    }
]

const carrinho = pegaItensDoLocalStorage()
console.log(carrinho)

function pegaItensDoLocalStorage() {
    return JSON.parse(localStorage.getItem("carrinho")) || []
}

function adicionarItemNoCarrinho(id) {
    const produtoSelecionado = itens.find(it => it.id === id)
    carrinho.push(produtoSelecionado)
    console.log(carrinho)
    atualizaLocalStorage()
    console.log(carrinho)
}

function removerItemDoCarrinho(id) {
    const index = carrinho.findIndex(it => it.id === id)
    carrinho.splice(index, 1)
    atualizaLocalStorage()
}


function atualizaLocalStorage() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
}