var jsonPizzaria = require('./produtos.js')

const usuario = jsonPizzaria.usuario
const categorias = jsonPizzaria.categorias
const produtos = jsonPizzaria.produtos
const produtosComentados = jsonPizzaria.produtosComentados

const getListaClientesPorID = function () {

    const filtro = id
    const usuario = jsonPizzaria.usuario

    const infoCliente = {}
    
    usuario.forEach(function (clientes) {

        if(usuario.id.includes(filtro)) {

        infoCliente.id = clientes.id
        infoCliente.nome = clientes.nome
        infoCliente.endereco_email = clientes.endereco_email
        infoCliente.endereco = clientes.endereco
        infoCliente.telefone = clientes.telefone

        }
        
    })

    return infoCliente

}

 const getTodosProdutos = function (idProdutos) {
 
    const arrayP = produtos.pizza
    const arrayPush = []
    const status = false

    arrayP.forEach(function(produto){
        if(produto.id == idProdutos) {
            let jsonP = {}

            jsonP.id = produto.id
            jsonP.tipo = produto.tipo
            jsonP.nome = produto.nome
            jsonP.descricao = produto.descricao
            jsonP.imagem = produto.imagem
            jsonP.preco = produto.preco

            status = true
            arrayPush.push(jsonP)
        }

    })

    let jsonT = {arrayPush}
    if(status) {
        return jsonT

    }else {
        return false
    }
    
 }

const getCategoriaProdutos = function(categoriasID) {
    const arrayCategorias = produtos.categorias
    let arrayI = []
    let status = false

    arrayCategorias.forEach(function (categoriaP){
        categoriaP.categoria.forEach(function (procate){
            if(procate.idCategoria == categoriasID) {
                let jsonCate = {
                    categoria: produtos.categoria,
                    nome: produtos.nome,
                    valor: produtos.valor
                }
                arrayI.push(jsonCate)
                status = true
            }
        })
    })

    if (status) {
        return (arrayI)
    } else {
        return false
    }
}

const getComentario = function (comentarioID) {
    const arrayComent = produtosComentados.comentarios
    const filtro = arrayComent.id

    const jsonComents = {}

    arrayComent.forEach(function (coments){
        if(arrayComent.id.includes(filtro)) {

            jsonComents.id = coments.id
            jsonComents.user = coments.user
            jsonComents.data = coments.data
            jsonComents.imagemUser = coments.imagemUser
            jsonComents.avaliacao = coments.avaliacao
            jsonComents.titulo = coments.titulo
            jsonComents.descricaoComentarios = coments.descricaoComentarios
        }
      
    })

    return jsonComents

}

const getAvaliacoes = function(valorA) {
    const arrayAvalia = produtosComentados.avaliacao
    const filtro = arrayAvalia.valor

    const jsonAvalia = {}

    arrayAvalia.forEach(function (valor){
        if(arrayAvalia.valor.includes(filtro)) {

            jsonAvalia.valor = valor.valor
        }
    })

}

module.exports = {
    getAvaliacoes,
    getCategoriaProdutos,
    getComentario,
    getListaClientesPorID,
    getTodosProdutos
}