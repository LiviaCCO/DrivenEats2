let pratoEsc = null;
function selecionarPrato(pratoSelecionado){
    const prato = document.querySelector(".prato .selecionado");
    if (prato !== null){
        prato.classList.toggle('selecionado');
    }
    
    pratoSelecionado.classList.add('selecionado');

    // const check = document.querySelector(".checkIcon .off");
    // console.log(check);
    // // if (check !== null){
    // //     check.classList.add('off');
    // // }
    // check.classList.add('off');
    pratoEsc = pratoSelecionado.innerHTML;
    fecharPedido();
}

let bebidaEsc = null;
function selecionarBebida(bebidaSelecionada){
    const bebida = document.querySelector(".bebida .selecionado");
    if (bebida !== null){
        bebida.classList.toggle('selecionado');
    }
    bebidaSelecionada.classList.add('selecionado');
    bebidaEsc = bebidaSelecionada.innerHTML;
    fecharPedido();
}

let sobremesaEsc = null;
function selecionarSobremesa(sobremesaSelecionada){
    const sobremesa = document.querySelector(".sobremesa .selecionado");
    if (sobremesa !== null){
        sobremesa.classList.toggle('selecionado');
    }
    sobremesaSelecionada.classList.add('selecionado');
    sobremesaEsc = sobremesaSelecionada.innerHTML;
    fecharPedido();
}

function fecharPedido(){
    if (pratoEsc !== null && bebidaEsc !== null && sobremesaEsc !== null){
        const rodape = document.querySelector(".selecionar");
        rodape.classList.add('escondido');
        console.log(rodape)
        const rodapeFechar = document.querySelector(".footer .fechar");
        console.log(rodapeFechar)
        rodapeFechar.classList.remove('escondido');
        
    }
}

// function msgFinal(){

// }