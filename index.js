const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

conexao.connect(erro => { //erro ou resultado
    
    if(erro) {
        console.log(erro)
    }else {
        console.log('conectado com sucesso')

        const app = customExpress()

        Tabelas.init(conexao)
        app.listen(3000, () =>  console.log('servidor na porta 3000'))
    }
})


//retirado a conexão com api pra somente apís a conexão com o banco 
//para não tentar realiar ações em vão
