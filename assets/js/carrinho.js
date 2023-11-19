const carrinho = pegaItensDoLocalStorage()

function pegaItensDoLocalStorage() {
    return localStorage.getItem("carrinho") || []
}

function adicionarItemNoCarrinho() {
    let produtoId = document.querySelector("#produto").value
    carrinho.push(produtoId)
    adicionarNoLocalStorage()
}


function adicionarNoLocalStorage() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
}