/*
    Quando clicar no pokémon da listagem temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem
*/

/*
    Para isso vamos precisar trabalhar com dois elementos:
        1 - Listagem
        2 - Cartão Pokémon
*/ 

/*
    Precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela. 
*/ 

/*
    Vamos precisar trabalhar com o evento de clique feito pelo usuário na listagem de pokémons

        - Remover a classe 'aberto' só do cartão que estiver aberto
        - Ao clicar no pokemon da listagem, pegamos o id desse pokémon pra saber qual cartão mostrar
        - Remover a classe ativa e marca a o pokémon selecionado
        - Adicionar a classe ativo no item da lista selecionado
*/ 

const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonsCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value
        
        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado
        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)

        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')
        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})