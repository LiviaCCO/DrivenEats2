let pratoEsc;
function selecionarPrato(pratoSelecionado){
    const prato = document.querySelector(".prato .selecionado");
    if (prato !== null){
        prato.classList.toggle('selecionado');
    }
    pratoSelecionado.classList.add('selecionado');


    const check = document.querySelector(".prato .escondido");
    console.log(check);
    if (check !== null){
        check.classList.toggle('escondido');
    }
    check.classList.remove('escondido');


    pratoEsc = pratoSelecionado.innerHTML;
    fecharPedido();
}

let bebidaEsc;
function selecionarBebida(bebidaSelecionada){
    const bebida = document.querySelector(".bebida .selecionado");
    if (bebida !== null){
        bebida.classList.toggle('selecionado');
    }
    bebidaSelecionada.classList.add('selecionado');
    bebidaEsc = bebidaSelecionada.innerHTML;
    fecharPedido();
}

let sobremesaEsc;
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
    if (pratoEsc !== undefined && bebidaEsc !== undefined && sobremesaEsc !== undefined){
        const rodape = document.querySelector(".selecionar");
        rodape.classList.add('escondido');
        const rodapeFechar = document.querySelector(".footer .fechar");
        rodapeFechar.classList.remove('escondido');
        console.log(pratoEsc);
    }
}

let total=0;
function msgFinal(){
    const nome = prompt("Qual o seu nome?");
    const local = prompt("Qual o endereço para entrega?");
    const dishEsc = document.querySelector(".prato .selecionado .nome");
    const drinkEsc = document.querySelector(".bebida .selecionado .nome");
    const dessertEsc = document.querySelector(".sobremesa .selecionado .nome");
    
    dish = dishEsc.innerHTML;
    drink = drinkEsc.innerHTML;
    dessert = dessertEsc.innerHTML;

    const priceDishEsc = document.querySelector(".prato .selecionado .preco");
    const priceDrinkEsc = document.querySelector(".bebida .selecionado .preco");
    const priceDessertEsc = document.querySelector(".sobremesa .selecionado .preco");
    
    // priceDish = Number(priceDishEsc.innerHTML);
    // priceDrink = Number(priceDrinkEsc.innerHTML);
    // priceDessert = Number(priceDessertEsc.innerHTML);

    // para trocar , por . 
    // .replace(",", ".");

    priceDish = Number(priceDishEsc.innerHTML.replace(",", "."));
    priceDrink = Number(priceDrinkEsc.innerHTML.replace(",", "."));
    priceDessert = Number(priceDessertEsc.innerHTML.replace(",", "."));

    const total = priceDish + priceDrink + priceDessert;
    //usando toFixed() para determinar a qtd de casas decimais
    const price = total.toFixed(2);

    // para transformar número em string
    // toString()
    // para trocar , por . : .replace(".", ",")
    let priceFinal = price.toString().replace(".", ",");
        
    let pedido = `Olá, gostaria de fazer o pedido: 
    
    - Prato: ${dish} 
    - Bebida: ${drink} 
    - Sobremesa: ${dessert} 
    Total: R$ ${price} 
       
    Nome: ${nome} 
    Endereço: ${local}` ;
    
    console.log(pedido);
    //para abrir página na internet via link
    function abreLink(){
        window.open(`https://wa.me/5521970027981?text=${encodeURIComponent(pedido)}`);
    }

    abreLink();
}
    


       