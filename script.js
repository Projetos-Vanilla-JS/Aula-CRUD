const btnCriar = document.querySelector("#btnCriar")
const listaFilmes = document.querySelector('#listaFilmes')
const inputUsuario = document.querySelector('#inputUsuario')

const filmes = [
    {
        nome: "Tropa de Elite",
        ano: 2008,
        diretor: "José Padilha"
    },
    {
        nome:"Carros",
        ano:2006,
        diretor:"John Lasseter"
    },
    {
        nome: "Titanic",
        ano: 1997,
        diretor: "James Cameron"
    }
]

btnCriar.addEventListener('click', function (infosDoEvento){
    infosDoEvento.preventDefault();

    let novoFilme = document.createElement('li')
    novoFilme.innerText = inputUsuario.value
    novoFilme.style.color = 'red'
    novoFilme.classList.add('itens-lista')
    novoFilme.classList.remove('itens-lista')

    let btnEditar = document.createElement('button')
    btnEditar.innerHTML = '<i class="fa-solid fa-pen-to-square"></i> <span>Editar</span'
    btnEditar.addEventListener('click', function(){
        novoFilme.classList.toggle('esconder')
    })
    listaFilmes.append(btnEditar)



    listaFilmes.append(novoFilme)


})

//infosDoEvento - objeto que todo evento em JS retorna
//infosDoEvento.target - Pega o elemento hmtl que a pessoa clicou
//infosDoEvento.target.parentNode - Pega o pai do elemento que a pessoa clicou
//infosDoEvento.target.parentNode.id - Pega o id do pai do elemento que a pessoa clicou


//document.createElement('li') - cria um elemento hmtl
//.append() - adiciona um elemento dento do outro no html
//.style.propriedadeCSS - altera uma propriedade CSS
//.classList.add() - adiciona uma classe
//.classList.remove() - remove uma classe
//.classList.toggle() - liga/desliga uma classe


//CREATE
function criarFilme(){
    const filmeNovo = {
        nome: inputUsuario.value,
        ano: inputAno.value,
        diretor: inputDiretor.value
    }

    filmes.unshift(filmeNovo)

    renderizarNaTela()
}

//READ
window.onload = renderizarNaTela()

function renderizarNaTela(){
    filmes.forEach(
        filme => {
            let novoFilme = document.createElement('li')
            novoFilme.innerHTML = `
            <h1>${filme.nome}</h1>
            <p>${filme.ano}</p>
            <h3>${filme.diretor}</h3>
            <button> Editar </button>`


            listaFilmes.append(novoFilme)
        }
    )
}

//UPDATE

//DELETE