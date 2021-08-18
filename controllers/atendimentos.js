const Atendimento = require('../models/atendimentos')

module.exports = app => {
    app.get('/atendimentos', (req, res) => {

        Atendimento.lista(res)
    })

    app.get('/atendimentos/:id', (req, res) =>{
        const id = parseInt(req.params.id)
        
        Atendimento.buscaPorId(id, res)
    })


    app.post('/atendimentos', (req, res) => {
        const atendimento = req.body //api requsitando 

        
        Atendimento.adiciona(atendimento, res)
    })

    app.delete('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        
        Atendimento.deleta(id, res)
    })
    
    //utilizado para alterar uma parte do objeto
    app.patch('/atendimentos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Atendimento.altera(id, valores, res)
    })
}

/* 
get também deve ser usado quando estiver esperando dados
controllers: onde podemos colocar validacoes de segurança
passando "res" como parametro eu capacito a função a utilizar esse metodo do express
*/
