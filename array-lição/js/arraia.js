const produtos = [
    {
        id: 1,
        nome: "Jaguar f-type",
        descrição: "Carro esportivo",
        preço: 500.000,
        Imagem:'img/jaguar.jpg'
    },
    {
        id: 3,
        nome: "Land Rover - velar",
        descrição: "Carro estilo SUV",
        preço: 900.000,
        Imagem:'img/velar.jpg'
    },
    {
        id: 4,
        nome: "volvo - xc60",
        descrição: "Carro 4x4",
        preço: 600.000,
        Imagem:'img/volvo.jpg'
    }
]

// função para produtos
let produtosContainer = document.querySelector('.produtos')
let produtosHtml = ''

produtos.forEach(produto => {
    produtosHtml += `
    <div class="card">
        <img src="${produto.Imagem}">
        <div class="card-body">
            <h1>${produto.nome}</h1>
            <p>${produto.descrição}</p>
            <p>R$ ${produto.preço}</p>
            <button>Comprar</button>
        </div>
    </div>
    `
})

produtosContainer.innerHTML = produtosHtml

