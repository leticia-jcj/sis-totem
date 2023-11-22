const lanchesDisponiveis = [
    //hamburguer
    {
        id: 'x-bacon',
        titulo: "X-Bacon",
        descricao: "Carne, bacon, queijo, alface e tomate.",
        preco: "16,99 "
    },
    {
        id: 'x-salada',
        titulo: "X-Salada",
        descricao: "Carne, queijo, alface, tomate e cebola.",
        preco: "10,99 "
    },
    {
        id: 'x-frango',
        titulo: "X-Frango",
        descricao: "Frango empanado na farinha panko, bacon, queijo.",
        preco: "12,99 "
    },
    {
        id: 'x-tudo',
        titulo: "X-Tudo",
        descricao: "Carne, bacon, ovo, queijo, alface,tomate e maionese caseira.",
        preco: "19,99 "
    },
    {
        id: 'x-smash',
        titulo: "X-Smash",
        descricao: "Blend de carne prensada na chapa e queijo.",
        preco: "9,99 "
    },
    {
        id: 'cheese-burguer',
        titulo: "Cheese Burguer",
        descricao: "Carne, duplo queijo e maionese caseira.",
        preco: "12,99 "
    },
    //sanduiches
    {
        id: 'sanduiche-de-atum',
        titulo: "Sanduíche de Atum",
        descricao: "Pão integral, atum, tomate e alface.",
        preco: "8,99 "
    },
    {
        id: 'peito-de-peru',
        titulo: "Peito de Perú",
        descricao: "Pão na chapa, peito de perú e queijo.",
        preco: "11,99 "
    },
    {
        id: 'presunto-e-queijo',
        titulo: "Presuto e Queijo",
        descricao: "Pão de fermentação natural na chapa, presunto e queijo.",
        preco: "12,99 "
    },
    {
        id: 'sanduiche-de-ricota',
        titulo: "Sanduíche de Ricota",
        descricao: "Pão integral, ricota fresca e cenoura ralada.",
        preco: "8,99 "
    },
    {
        id: 'ricota-com-rucula',
        titulo: "Ricota com Rúcula",
        descricao: "Pão de 7 grãos, ricota, rúcula e azeite.",
        preco: "9,99 "
    },
    {
        id: 'mexicano',
        titulo: "Mexicano",
        descricao: "Pão de 7 grãos, guacamole, pimenta caiena e ovo.",
        preco: "15,99 "
    },
    //salgados
    {
        id: 'coxinha-de-frango',
        titulo: "Coxinha de Frango",
        descricao: "Massa de mandioca, empanada na farinha de milho.",
        preco: "8,99 "
    },
    {
        id: 'croissant',
        titulo: "Croissant",
        descricao: "Tradicional com manteiga de garrafa.",
        preco: "11,99 "
    },
    {
        id: 'enroladinho-de-salsicha',
        titulo: "Enroladinho de Salsicha",
        descricao: "Massa de fermentação natural, salsicha e queijo.",
        preco: "12,99 "
    },
    {
        id: 'pizza-de-calabresa',
        titulo: "Pizza de Calabresa",
        descricao: "Massa leve, molho de tomate, queijo e calabresa.",
        preco: "8,99 "
    },
    {
        id: 'pao-de-queijo',
        titulo: "Pão de Queijo",
        descricao: "Polvilho doce, queijo parmesão meia cura e azeite.",
        preco: "9,99 "
    },
    {
        id: 'esfirra-de-carne',
        titulo: "Esfirra de Cerne",
        descricao: "Massa leve, carne temperada com ervas finas.",
        preco: "5,99 "
    },
    //crepes
    {
        id: 'banana-com-nutela',
        titulo: "Banana com Nutela",
        descricao: "Massa leve, banana com nutela e calda de chocolate.",
        preco: "10,99 "
    },
    {
        id: 'chocolate',
        titulo: "Chocolate",
        descricao: "Massa leve, chocolate amargo, calda de chocolate e chantilly.",
        preco: "11,99 "
    },
    {
        id: 'tradicional',
        titulo: "Tradicional",
        descricao: "Massa de fermentação natural, queijo e manteiga.",
        preco: "8,99 "
    },
    {
        id: 'panqueca-americana',
        titulo: "Panqueca Americana",
        descricao: "Massa leve, frutas vermelhas e xarope de milho.",
        preco: "8,99 "
    },
    {
        id: 'panqueca-tradicional',
        titulo: "Panqueca Tradicional",
        descricao: "Massa leve, manteiga e xarope de milho.",
        preco: "6,99 "
    },
    {
        id: 'waffle-com-nutela',
        titulo: "Waffle com Nutela",
        descricao: "Massa leve, nutela e açucar de confeiteiro.",
        preco: "7,99 "
    },
    //bebidas
    {
        id: 'agua-mineral-500ml',
        titulo: "Água Mineral 500ml",
        descricao: "Água mineral Indaia 500ml.",
        preco: "2,99 "
    },
    {
        id: 'agua-mineral-500ml-com-gas',
        titulo: "Água Mineral 500ml (com gás)",
        descricao: "Água mineral Indaia com gás 500ml.",
        preco: "3,99 "
    },
    {
        id: 'coca-cola-300ml',
        titulo: "Coca-Cola 300ml",
        descricao: "Refrigerante coca-cola 300ml (lata).",
        preco: "4,99 "
    },
    {
        id: 'coca-cola-zero-300ml',
        titulo: "Coca-Cola Zero 300ml",
        descricao: "Refrigerante coca-cola zero 300ml (lata).",
        preco: "4,99 "
    },
    {
        id: 'guarana-350ml',
        titulo: "Guaraná 350ml",
        descricao: "Refrigerante guaraná 350ml (lata).",
        preco: "4,99 "
    },
    {
        id: 'guarana-zero-350ml',
        titulo: "Guaraná Zero 350ml",
        descricao: "Refrigerante guaraná zero 350ml (lata).",
        preco: "4,99 "
    },
    {
        id: 'suco-de-laranja-300ml',
        titulo: "Suco de Laranja 300ml",
        descricao: "Suco de laranja da fruta 300ml.",
        preco: "6,99 "
    },
    {
        id: 'suco-tropical-350ml',
        titulo: "Suco Tropical 350ml",
        descricao: "Mix de frutas da estação (antioxidante).",
        preco: "6,99 "
    },
    {
        id: 'creme-de-morango',
        titulo: "Creme de Morango 350ml",
        descricao: "Morango, leite e leite condensado.",
        preco: "6,99 "
    },
]
const carrinho = pegaItensDoLocalStorage()

const todosOsbotoes = document.querySelectorAll('button')





todosOsbotoes.forEach((button) => {

    const lancheDentroDoCarrinho = carrinho.find(item => item.id === button.dataset.produtoId)
    if (lancheDentroDoCarrinho) {
        const input = button.parentNode.querySelector('.input-card')

        input.value = lancheDentroDoCarrinho.quantidade

    }

    button.addEventListener('click', () => {

        const input = button.parentNode.querySelector('.input-card')

        let quantidadeAtual = Number(input.value)

        const lancheSelecionado = lanchesDisponiveis.find(item => item.id === button.dataset.produtoId)

        if (button.classList.contains("aumentar")) {
            quantidadeAtual++
            input.value = quantidadeAtual

        } else if (button.classList.contains("diminuir")) {
            if (quantidadeAtual > 0) {
                quantidadeAtual--
                input.value = quantidadeAtual
            }

        } else if (quantidadeAtual > 0) {
            lancheSelecionado.quantidade = quantidadeAtual
            adicionarLancheNoCarrinho(lancheSelecionado)
        }
    })
})



function pegaItensDoLocalStorage() {
    return JSON.parse(localStorage.getItem("carrinho")) || []
}


function atualizaLocalStorage() {
    localStorage.setItem('carrinho', JSON.stringify(carrinho))
}

function adicionarLancheNoCarrinho(lancheSelecionado) {
    const lancheEncontrado = carrinho.find(item => item.id === lancheSelecionado.id)
    if (lancheEncontrado == undefined) {
        carrinho.push(lancheSelecionado)
    } else {
        lancheEncontrado.quantidade = lancheSelecionado.quantidade
    }

    atualizaLocalStorage()
}

function removerLancheDoCarrinho(id) {
    const index = carrinho.findIndex(it => it.id === id)
    carrinho.splice(index, 1)
    atualizaLocalStorage()
}


