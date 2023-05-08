var formulario = document.querySelector('form')

formulario.addEventListener('submit', function(e){
    //Bloqueia o refresh da página
    e.preventDefault()

    // Url da página
    let urlForm = " https://pokeapi.co/api/v2/pokemon/";
    // Valor do input Name
    let nome = document.getElementById('name')

    // Concatena a url com o input name
    urlForm = urlForm + this.name.value

    // Transforma os valores em minúsculos
    urlForm = urlForm.toLocaleLowerCase()

    // ID Content
    let resposta = document.getElementById('content')

    // ID ImgPokemon
    let imagem = document.getElementById('imgPokemon')

    // Resposta em HTML
    let html = ''

    fetch(urlForm)
        .then(resposta => resposta.json())
        .then(function(data){
            console.log(data)
            html = 'Nome: ' + maiuscula(data.name) + '<br>'
            html = html + 'Type: ' + maiuscula(data.types[0].type.name)
            resposta.innerHTML = html

            imagem.innerHTML = "<img src='" + data.sprites.front_default + "'>"
        })
        .catch(function(err){
            if(err == 'SyntaxError: Unexpected token N in JSON at position 0'){
                html = 'Pokémon não encontrado! :('
            } else {
                html = err
            }
            resposta.innerHTML = html
        })
});

function maiuscula(valor){
    return valor[0].toUpperCase() + valor.substr(1)
}