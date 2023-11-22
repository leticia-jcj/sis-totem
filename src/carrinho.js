
const divDosCards = document.querySelector(".lista-itens")


carrinho.forEach((lanche) => {
    const card =
        `
    
    <div class="item-pedido">
        <div>
            <img src="${lanche.img}"
                alt="imagem do produto">
        </div>

        <div>
            <p>${lanche.titulo}</p>
        </div>

        <div>
            <p>${lanche.quantidade}</p>
        </div>

        <div>
            <p>${lanche.preco}</p>
        </div>

        <div>
            <button id="remover" data-produto-id="${lanche.id}">remover</button>
        </div>
    </div>

    `
    divDosCards.innerHTML += card
})
