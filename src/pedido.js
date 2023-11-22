
const divDosCards = document.querySelector(".container")


carrinho.forEach((lanche) => {
    const card = `

    <div class="card card-hamburguer" style="width: 18rem;">
    <img src="../assets/img/bebidas/agua-normal.jpg" class="card-img-top img-card-hamburguer" alt="...">
    <div class="card-body">
        <h5 class="card-title">${lanche.titulo}</h5>
        <p class="card-text">${lanche.descricao}</p>
        <p class="preco-hamburguer">R$ 2.99 <span style="font-size: medium;">(und)</span></p>
        <div>
            <button data-produto-id="agua-mineral-500ml" class="diminuir" >-</button>
            <input type="number" class="form-control input-card" id="quantity" name="quantity" value="1" min="1"
                >
            <button data-produto-id="agua-mineral-500ml" class="aumentar" >+</button>
        </div>
        <button data-produto-id="agua-mineral-500ml" class="btn btn-danger">adicinar ao carrinho
        </button>
    </div>
</div>
    `
    divDosCards.innerHTML += card
})
