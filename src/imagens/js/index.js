const personagens = document.querySelectorAll('.personagem')

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {


        if(window.innerWidth < 450){
            window.scrollTo({top: 115, behavior: 'smooth'});
        }

        removerSelecaoDoPersonagem();
       
         personagem.classList.add('selecionado');

        alterarImagemDoPersonagemSelecionado(personagem);
        
        alterarNomeDoPersonagemSelecionado(personagem);

        alterarDescricaoPersonagemSelecionado(personagem);
    })
})


function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomeDoPersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');


    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemDoPersonagemSelecionado(personagem) {
    const imagempersonagemGrande = document.querySelector('.personagem-grande');


    const idPersonagem = personagem.attributes.id.value;

    imagempersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}

