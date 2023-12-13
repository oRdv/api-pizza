const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()

app.use((request, response, next) =>{
    response.header('Access-Control-Allow-Origin', '*')
     response.header('Access-Control-Allow-Methods', 'GET')

     app.use(cors())

     next()
})

app.get('/function/cliente', cors(), async function(request, response, next){
    let idProdutos = request.query.id
    let controleDadosProdutos = require('./model/funcions.js');
    let dadosProdutos = controleDadosProdutos.getTodosProdutos(idProdutos);

    if(dadosProdutos){
        response.json(dadosProdutos);
        response.status(200);
    } else{
        response.status(404)
        response.json({erro:'Não foi possível encontrar um item.'})
    }
});

app.listen(8080, function(){
    console.log('API FUNCIONOU UPA LELE')
});