// getListaClientes 
// getTodosProdutos 
// getCategoriaProdutos 
// getClientesNome 
// getCategorias 
// getComentario 
// getAvaliacoes 




var jsonPizzaria = require('./produtos.js')

const usuario = jsonPizzaria.usuario
const categorias = jsonPizzaria.categorias
const produtos = jsonPizzaria.produtos
const produtosComentados = jsonPizzaria.produtosComentados

const getListaClientes = function () {
    const array = []
    
    usuario.forEach(function (clientes) {
        array.push(clientes.clientes)
    })

    const clientes = {array}

    return clientes
}

