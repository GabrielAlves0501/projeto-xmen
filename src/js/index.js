const listaDePersonagens = document.querySelectorAll('.personagem')

listaDePersonagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if(window.innerWidth < 450){
            window.scrollTo({top: 0, behaviour: 'smooth'})
        }

        const personagemSelecionado = document.querySelector('.selecionado')
        personagemSelecionado.classList.remove('selecionado')

        personagem.classList.add('selecionado')

        const personagemGrande = document.querySelector('.personagemGrande')

        const idPersonagem = personagem.attributes.id.value
        personagemGrande.src = `./src/imagens/card-${idPersonagem}.png`

        const nomePersonagem = document.getElementById('nomePersonagem')
        nomePersonagem.innerText = personagem.getAttribute('data-name')

        const descricaoPersonagem = document.getElementById('descricaoPersonagem')
        descricaoPersonagem.innerText = personagem.getAttribute('data-description')
    })
})