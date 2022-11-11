//-> jeito de pegar o elemento html da seta avançar

//-> jeito de identificar o clique do usuario na seta avançar
const btnAvancar = document.getElementById('btn-avancar');
    //variavel não alteravel

let cartaoAtual = 0;
    //vairável alterável

const cartoes = document.querySelectorAll('.cartao');
        //Usar . porque é uma classe
        
const btnVoltar = document.getElementById('btn-voltar')

function esconderSelecionado(){

    const cartaoSelecionado = document.querySelector('.selecionado');
    //Cascata: vai pegar o primeiro selecionado (pikachu)

    cartaoSelecionado.classList.remove('selecionado');
    //Remover o selecionado
}

function mostrarSelecionado(cartaoAtual){

    cartoes[cartaoAtual].classList.add('selecionado');
    //Adiciona uma classe 'selecionado' no array 1

}


btnAvancar.addEventListener('click', function(){

    if(cartaoAtual === cartoes.length - 1) return
    //cartoes.length = 3 (tamanho)
    //criar um IF para não executar mais porque não tem mais cartao


    //-> aparecer o proximo cartão da lista
    cartaoAtual++;
        //incremento +1

    esconderSelecionado();
    
    mostrarSelecionado(cartaoAtual);

})



;

btnVoltar.addEventListener('click', function(){

    if (cartaoAtual === 0) return

    esconderSelecionado();

    cartaoAtual--;

    mostrarSelecionado(cartaoAtual);

})



/*
2) clicar na seta de voltar, mostrar o cartao anterior
    -> jeito de pegar o elemento html da seta voltar 

    -> jeito de identificar o clique do usuario na seta voltar

    -> aparecer o cartão anterior da lista

    -> buscar o cartao que está selecionado e esconder

    obs: O que faz o cartão aparecer??
    -> O conjunto das classes cartão + selecionado
*/
