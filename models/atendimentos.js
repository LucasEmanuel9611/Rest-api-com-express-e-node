const conexao = require('../infraestrutura/conexao')
const moment = require('moment')

class Atendimento {
  adiciona(atendimento, res) {
    const dataCriacao = moment().format("YYYY-MM-DD HH:MM:SS");
    const data = moment(atendimento.data, "DD/MM/YYYY").format("YYYY-MM-DD HH:MM:SS");

    const dataEhValida = moment(data).isSameOrAfter(dataCriacao);
    const ClienteEhValido = atendimento.cliente.length >= 5;

    const validacoes = [
      {
        nome: "data",
        valido: dataEhValida,
        mensagem: "Data deve ser maior ou igual a data atual"
      },
      {
        nome: "cliente",
        valido: ClienteEhValido,
        mensagem: "Cliente deve ter pelo menos 5 carateres"
      },
    ];

    /*se o campo for diferente de valido
    o valor da cons erros vai ser maior que 0, (0 false) (1 true)*/
    const erros = validacoes.filter((campo) => !campo.valido);

    const existemErros = erros.length;

    //se existirem erros a query não é feita e o motivo é mostrado
    if (existemErros) {
      res.status(400).json(erros);
    } else {
      const atendimentoDatado = { ...atendimento, dataCriacao, data };
      const sql = "INSERT INTO Atendimentos SET ?";

      conexao.query(sql, atendimentoDatado, (erro, resultados) => {
        if (erro) {
          res.status(400).json(erro);
        } else {
          res.status(201).json(resultados);
        }
      });
    }
  }
}

//podemos utilizar validacoes de regra de negócio

module.exports = new Atendimento


