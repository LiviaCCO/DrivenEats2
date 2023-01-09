let pratoEsc;
function selecionarPrato(pratoSelecionado){
    const prato = document.querySelector(".prato .selecionado");
    const check = pratoSelecionado.querySelector("ion-icon");
    if (prato !== null){
        prato.classList.toggle('selecionado');
        const checkOn = document.querySelector(".prato .checkOn");
        checkOn.classList.toggle('checkOn');
    }
    pratoSelecionado.classList.add('selecionado');
    check.classList.add('checkOn');

    pratoEsc = pratoSelecionado.innerHTML;
    fecharPedido();
}

let bebidaEsc;
function selecionarBebida(bebidaSelecionada){
    const bebida = document.querySelector(".bebida .selecionado");
    const check = bebidaSelecionada.querySelector("ion-icon");
    if (bebida !== null){
        bebida.classList.toggle('selecionado');
        const checkOn = document.querySelector(".bebida .checkOn");
        checkOn.classList.toggle('checkOn');
    }
    bebidaSelecionada.classList.add('selecionado');
    check.classList.add('checkOn');

    bebidaEsc = bebidaSelecionada.innerHTML;
    fecharPedido();
}

let sobremesaEsc;
function selecionarSobremesa(sobremesaSelecionada){
    const sobremesa = document.querySelector(".sobremesa .selecionado");
    const check = sobremesaSelecionada.querySelector("ion-icon");
    if (sobremesa !== null){
        sobremesa.classList.toggle('selecionado');
        const checkOn = document.querySelector(".sobremesa .checkOn");
        checkOn.classList.toggle('checkOn');
    }
    sobremesaSelecionada.classList.add('selecionado');
    check.classList.add('checkOn');

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

        // confirmar();    
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

    // para retirar R$ 
    // .replace("R$ ", " ")
    // para trocar , por . 
    // .replace(",", ".");
 
    priceDish = Number(priceDishEsc.innerHTML.replace("R$ ", " ").replace(",", "."));
    priceDrink = Number(priceDrinkEsc.innerHTML.replace("R$ ", " ").replace(",", "."));
    priceDessert = Number(priceDessertEsc.innerHTML.replace("R$ ", " ").replace(",", "."));
    

    const total = priceDish + priceDrink + priceDessert;
    
    //usando toFixed() para determinar a qtd de casas decimais
    const price = total.toFixed(2);

    // para deixar o número final com vírgula
    // // transformar o número em string
    // // .toString()
    // // para trocar , por . : .replace(".", ",")

    // let priceFinal = price.toString().replace(".", ",");
        
    let pedido = `Olá, gostaria de fazer o pedido: 
    
    - Prato: ${dish} 
    - Bebida: ${drink} 
    - Sobremesa: ${dessert} 
    Total: R$ ${price} 
       
    Nome: ${nome} 
    Endereço: ${local}` ;
    
    console.log(pedido);
    //para abrir página na internet via link
    function abrirLink(){
        window.open(`https://wa.me/5521970027981?text=${encodeURIComponent(pedido)}`);
    }

    abrirLink();
}
    




function confirmar(){
    // para aparecer o resumo final do pedido
    const resumo = document.querySelector(".paraConfirmar");
    resumo.classList.remove('escondido');

    //para o nome dos itens:
    const item1 = document.querySelector(".confirmePrato .item");
    const item2 = document.querySelector(".confirmeBebida .item");
    const item3 = document.querySelector(".confirmeSobremesa .item");
    const dishEsc = document.querySelector(".prato .selecionado .nome");
    const drinkEsc = document.querySelector(".bebida .selecionado .nome");
    const dessertEsc = document.querySelector(".sobremesa .selecionado .nome");
    
    dish = dishEsc.innerHTML;
    drink = drinkEsc.innerHTML;
    dessert = dessertEsc.innerHTML;

    item1.innerHTML = `${dish}`;
    item2.innerHTML = `${drink}`;
    item3.innerHTML = `${dessert}`;


    //para os valores dos pratos:

    const priceDishEsc = document.querySelector(".prato .selecionado .preco");
    const priceDrinkEsc = document.querySelector(".bebida .selecionado .preco");
    const priceDessertEsc = document.querySelector(".sobremesa .selecionado .preco");
    const valor1 = document.querySelector(".confirmePrato .valor");
    const valor2 = document.querySelector(".confirmeBebida .valor");
    const valor3 = document.querySelector(".confirmeSobremesa .valor");

    valorDish = priceDishEsc.innerHTML;
    valorDrink = priceDrinkEsc.innerHTML;
    valorDessert = priceDessertEsc.innerHTML;
    valor1.innerHTML = `${valorDish}`;
    valor2.innerHTML = `${valorDrink}`;
    valor3.innerHTML = `${valorDessert}`;

    //para calcular o total:
    priceDish = Number(priceDishEsc.innerHTML.replace("R$ ", " ").replace(",", "."));
    priceDrink = Number(priceDrinkEsc.innerHTML.replace("R$ ", " ").replace(",", "."));
    priceDessert = Number(priceDessertEsc.innerHTML.replace("R$ ", " ").replace(",", "."));
    

    const total = priceDish + priceDrink + priceDessert;
    
    //usando toFixed() para determinar a qtd de casas decimais
    const valorTotal = total.toFixed(2);

    // para colocar valor final com virgula:
    const priceFinal = valorTotal.toString().replace(".", ",");
    const soma = document.querySelector(".soma");
    soma.innerHTML = `R$ ${priceFinal}`;
    
}

function cancelar(){
    const voltar = document.querySelector(".paraConfirmar");
    voltar.classList.add('escondido');
}


// function msgFinal(){
//     const nome = prompt("Qual o seu nome?");
//     const local = prompt("Qual o endereço para entrega?");
//     const dishEsc = document.querySelector(".prato .selecionado .nome");
//     const drinkEsc = document.querySelector(".bebida .selecionado .nome");
//     const dessertEsc = document.querySelector(".sobremesa .selecionado .nome");
    
//     dish = dishEsc.innerHTML;
//     drink = drinkEsc.innerHTML;
//     dessert = dessertEsc.innerHTML;

//     const priceDishEsc = document.querySelector(".prato .selecionado .preco");
//     const priceDrinkEsc = document.querySelector(".bebida .selecionado .preco");
//     const priceDessertEsc = document.querySelector(".sobremesa .selecionado .preco");
    
//     // priceDish = Number(priceDishEsc.innerHTML);
//     // priceDrink = Number(priceDrinkEsc.innerHTML);
//     // priceDessert = Number(priceDessertEsc.innerHTML);

//     // para retirar R$ 
//     // .replace("R$ ", " ")
//     // para trocar , por . 
//     // .replace(",", ".");
 
//     priceDish = Number(priceDishEsc.innerHTML.replace("R$ ", " ").replace(",", "."));
//     priceDrink = Number(priceDrinkEsc.innerHTML.replace("R$ ", " ").replace(",", "."));
//     priceDessert = Number(priceDessertEsc.innerHTML.replace("R$ ", " ").replace(",", "."));
    

//     const total = priceDish + priceDrink + priceDessert;
    
//     //usando toFixed() para determinar a qtd de casas decimais
//     const price = total.toFixed(2);

//     // para deixar o número final com vírgula
//     // // transformar o número em string
//     // // .toString()
//     // // para trocar , por . : .replace(".", ",")

//     // let priceFinal = price.toString().replace(".", ",");
        
//     let pedido = `Olá, gostaria de fazer o pedido: 
    
//     - Prato: ${dish} 
//     - Bebida: ${drink} 
//     - Sobremesa: ${dessert} 
//     Total: R$ ${price} 
       
//     Nome: ${nome} 
//     Endereço: ${local}` ;
    
//     console.log(pedido);
//     //para abrir página na internet via link
//     function abrirLink(){
//         window.open(`https://wa.me/5521970027981?text=${encodeURIComponent(pedido)}`);
//     }

//     abrirLink();
// }