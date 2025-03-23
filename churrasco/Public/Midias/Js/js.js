$(document).ready(() => {
    $("#btn-carnes").mouseenter(function () {
        var fotos = $('#fotos');
       fotos.find('img').remove();
                
       // Cria dinamicamente um novo elemento img \\
       var imagem1 = $('<img>').attr('src', '../Midias/Imgs/Index/carne1.png').attr('width', '400px');
       var imagem2 = $('<img>').attr('src', '../Midias/Imgs/Index/carne2.png').attr('width', '400px');
       
       fotos.append(imagem1, imagem2); // Adiciona o novo elemento img à div fotos \\

    $("#btn-carnes").click(function () {
            window.location.href = '/carnes'; 
    });
    });
    $("#btn-carnes").mouseleave(function () {
        var fotos = $('#fotos');
       fotos.find('img').remove();
    });
    $("#btn-adic").mouseenter(function () {
        var fotos = $('#fotos');
       fotos.find('img').remove();

       var imagem1 = $('<img>').attr('src', '../Midias/Imgs/Index/adic1.png').attr('width', '400px');
       var imagem2 = $('<img>').attr('src', '../Midias/Imgs/Index/adic2.png').attr('width', '400px');
       
       fotos.append(imagem1, imagem2);

       $("#btn-adic").click(function () {
            window.location.href = '/adicionais'; 
        });
    });
    $("#btn-adic").mouseleave(function () {
        var fotos = $('#fotos');
       fotos.find('img').remove();
    });
    $("#btn-salada").mouseenter(function () {
        var fotos = $('#fotos');
       fotos.find('img').remove();
  
       var imagem1 = $('<img>').attr('src', '../Midias/Imgs/Index/salada1.png').attr('width', '400px');
       var imagem2 = $('<img>').attr('src', '../Midias/Imgs/Index/salada2.png').attr('width', '400px');
       
       fotos.append(imagem1, imagem2);

       $("#btn-salada").click(function () {
            window.location.href = '/salada'; 
        });
    });
    $("#btn-salada").mouseleave(function () {
        var fotos = $('#fotos');
       fotos.find('img').remove();
    });
    $("#btn-bebidas").mouseenter(function () {
        var fotos = $('#fotos');
       fotos.find('img').remove();
                
       var imagem1 = $('<img>').attr('src', '../Midias/Imgs/Index/bebida1.png').attr('width', '400px');
       var imagem2 = $('<img>').attr('src', '../Midias/Imgs/Index/bebida2.png').attr('width', '400px');
       
       fotos.append(imagem1, imagem2);

       $("#btn-bebidas").click(function () {
            window.location.href = '/bebidas'; 
        });
    });
    $("#btn-bebidas").mouseleave(function () {
        var fotos = $('#fotos');
       fotos.find('img').remove();
    });
    $("#btn-sobremesa").mouseenter(function () {
        var fotos = $('#fotos');
       fotos.find('img').remove();
                
       var imagem1 = $('<img>').attr('src', '../Midias/Imgs/Index/doce1.png').attr('width', '400px');
       var imagem2 = $('<img>').attr('src', '../Midias/Imgs/Index/doce2.png').attr('width', '400px');
       
       fotos.append(imagem1, imagem2);

       $("#btn-sobremesa").click(function () {
            window.location.href = '/sobremesas'; 
        });
    });
    $("#btn-sobremesa").mouseleave(function () {
        var fotos = $('#fotos');
       fotos.find('img').remove();
    });

///Pedidos///
    var preco = 0;
    var preco_carnes = 0;
    var preco_adicionais = 0;
    var preco_salada = 0;
    var preco_bebidas = 0;
    var preco_sobremesas = 0;
    var pedido = {'cliente' : [],'carnes' : [], 'adicionais' : [], 'salada' : [], 'bebidas' : [], 'sobremesas' : [], 'preco': []};

    let idCounter = 0; 
   
$('#carneEscolha').on('change', function() {
        let selectedValues = $(this).find('option:selected').map(function() {
            return $(this).val();
        }).get();
    
        var selectedValuesString = selectedValues.join(', ');
    
        var pedidoEscolha = selectedValuesString.split("/");
    
        if(pedidoEscolha[0] != ''){
            idCounter++;
        
            for (let i = 0; i < selectedValues.length; i++) {
                $('#carneContainer').append(`
                    <p data-id="${idCounter}">
                        <span>${pedidoEscolha[0]}</span>
                        R$${pedidoEscolha[1]}
                        <button class="btnX"><i class="fa-solid fa-xmark"></i></button>
                    </p>
                `);

                var precoEscolhaAtual = Number(pedidoEscolha[1]);

                pedido['carnes'].push({
                    id: idCounter,
                    item: pedidoEscolha[0],
                    preco: precoEscolhaAtual
                });

                preco_carnes = preco_carnes + precoEscolhaAtual;
                printarPreco('carnes');
            }
        }
});
$('#adicionaisEscolha').on('change', function() {
    let selectedValues = $(this).find('option:selected').map(function() {
        return $(this).val();
    }).get();

    var selectedValuesString = selectedValues.join(', ');

    var pedidoEscolha = selectedValuesString.split("/");

    if(pedidoEscolha[0] != ''){
        idCounter++;
    
        for (let i = 0; i < selectedValues.length; i++) {
            $('#adicionaisContainer').append(`
                <p data-id="${idCounter}">
                    <span>${pedidoEscolha[0]}</span>
                    R$${pedidoEscolha[1]}
                    <button><i class="fa-solid fa-xmark"></i></button>
                </p>
            `);
        
            var precoEscolhaAtual = Number(pedidoEscolha[1]);

            pedido['adicionais'].push({
                id: idCounter,
                item: pedidoEscolha[0],
                preco: precoEscolhaAtual
            });

            preco_adicionais = preco_adicionais + precoEscolhaAtual;
            printarPreco('adicionais');
        }
    }
});
$('#saladaEscolha').on('change', function() {
    let selectedValues = $(this).find('option:selected').map(function() {
        return $(this).val();
    }).get();

    var selectedValuesString = selectedValues.join(', ');

    var pedidoEscolha = selectedValuesString.split("/");

    if(pedidoEscolha[0] != ''){
        idCounter++;
    
        for (let i = 0; i < selectedValues.length; i++) {
            $('#saladaContainer').append(`
                <p data-id="${idCounter}">
                    <span>${pedidoEscolha[0]}</span>
                    R$${pedidoEscolha[1]}
                    <button><i class="fa-solid fa-xmark"></i></button>
                </p>
            `);
        
            var precoEscolhaAtual = Number(pedidoEscolha[1]);
            
            pedido['salada'].push({
                id: idCounter,
                item: pedidoEscolha[0],
                preco: precoEscolhaAtual
            });

            preco_salada = preco_salada + precoEscolhaAtual;
            printarPreco('salada');
        }
    }
});
$('#bebidasEscolha').on('change', function() {
    let selectedValues = $(this).find('option:selected').map(function() {
        return $(this).val();
    }).get();

    var selectedValuesString = selectedValues.join(', ');

    var pedidoEscolha = selectedValuesString.split("/");

    if(pedidoEscolha[0] != ''){
        idCounter++;
    
        for (let i = 0; i < selectedValues.length; i++) {
            $('#bebidasContainer').append(`
                <p data-id="${idCounter}">
                    <span>${pedidoEscolha[0]}</span>
                    R$${pedidoEscolha[1]}
                    <button><i class="fa-solid fa-xmark"></i></button>
                </p>
            `);
        
            var precoEscolhaAtual = Number(pedidoEscolha[1]);
            
            pedido['bebidas'].push({
                id: idCounter,
                item: pedidoEscolha[0],
                preco: precoEscolhaAtual
            });

            preco_bebidas = preco_bebidas + precoEscolhaAtual;
            printarPreco('bebidas');
        }
    }
});
$('#sobremesasEscolha').on('change', function() {
    let selectedValues = $(this).find('option:selected').map(function() {
        return $(this).val();
    }).get();
   
    var selectedValuesString = selectedValues.join(', ');

    var pedidoEscolha = selectedValuesString.split("/");

    if(pedidoEscolha[0] != ''){
        idCounter++;
    
        for (let i = 0; i < selectedValues.length; i++) {
            $('#sobremesasContainer').append(`
                <p data-id="${idCounter}">
                    <span>${pedidoEscolha[0]}</span>
                    R$${pedidoEscolha[1]}
                    <button><i class="fa-solid fa-xmark"></i></button>
                </p>
            `);
        
            var precoEscolhaAtual = Number(pedidoEscolha[1]);
            
            pedido['sobremesas'].push({
                id: idCounter,
                item: pedidoEscolha[0],
                preco: precoEscolhaAtual
            });

            preco_sobremesas = preco_sobremesas + precoEscolhaAtual;
            printarPreco('sobremesas');
        }
    }
});
function obterValoresDoFormulario() {
    var nome = document.getElementById('nome').value;
    var endereco = document.getElementById('endereco').value;
    var numero = document.getElementById('numero').value;
    var complemento = document.getElementById('complemento').value;
    var telefone = document.getElementById('telefone').value;

    if (nome === '' || endereco === '' || numero === '' || complemento === '' || telefone === '') {
        alert('Por favor, preencha todos os campos do cartão "Dados para entrega".');
        return false;
    }

    pedido['cliente'].push({
        nome: nome,
        endereco: endereco,
        numero: numero,
        complemento: complemento,
        telefone: telefone
    });

    return true;
}    
$('#escolhidos').on('click', 'button', function() {
        var idToRemove = $(this).closest('p').data('id');
    
        $(this).closest('p').remove();
    
        // Removendo o elemento correspondente do array na variavel pedido
        var encontrado = false;
        for (var tipoProduto in pedido) { //Passar pela var pedido e colocar os [values] dentro de tipoProduto
            pedido[tipoProduto] = pedido[tipoProduto].filter(function(item) { //Passar pelos elementos que estão dentro de pedido[tipoProduto] e colocar os elementos na variavel item
                if (item.id === idToRemove) { //Se o item.id for identico ai id que foi pego do objeto removido ent{remove item retornando false}
                    encontrado = true;
                    return false;
                }
                return true; // Mantém os itens no array
            });

            // Se encontrou o item em um tipo de produto, atualiza o preço e sai do loop
            if (encontrado) {
                printarPreco(tipoProduto);
                break;
            }
        }
    
        // Se não encontrou o item em nenhum tipo de produto, redefine o preço para 0
        if (!encontrado) {
            preco = 0;
            $('#precoEscolhidos').html('R$' + preco + '.00');
        }
});
function printarPreco(tipoProduto) {
    var novoPreco = pedido[tipoProduto].reduce(function(total, item) {
        return total + item.preco;
    }, 0);

    switch(tipoProduto){
        case 'carnes':
            preco_carnes = novoPreco;
            break;
        case 'adicionais':
            preco_adicionais = novoPreco;
            break;
        case 'salada':
            preco_salada = novoPreco;
            break;
        case 'bebidas':
            preco_bebidas = novoPreco;
            break;
        case 'sobremesas':
            preco_sobremesas = novoPreco;
            break;
        default:
            console.log("Tipo inválido");
            break;
    }

    preco = preco_carnes + preco_adicionais + preco_salada + preco_bebidas + preco_sobremesas;

    
    // Atualiza o elemento HTML para mostrar o novo preço total
    $('#precoEscolhidos').html('R$' + preco + '.00');
}
//Mandando dados para o php IndexController 
$('#btnFazerPedido').on('click', function() {
        if (!obterValoresDoFormulario()) {
            return;
        }

        pedido['preco'].push({
            'preco_total': preco
        });

        var dadosParaEnviar = JSON.stringify(pedido);

        $.ajax({
            type: 'POST',
            url: '/fazerPedido',
            data: { pedido: dadosParaEnviar },
            dataType: 'json',
            success: function (dados) {
                if (dados.success) {
                    alert(dados.resultadoPositivo);
                    location.reload();
                } else {
                    alert('Erro ao fazer o pedido, tente novamente');
                }
            },
            error: function (erro) {
                console.error('Erro ao enviar dados para o PHP:', erro);
            }
        });
});
});