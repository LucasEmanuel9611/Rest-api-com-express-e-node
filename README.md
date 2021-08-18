controllers/atendimentos decide para onde vai ser mandado, que requisição e que model ele vai chamar, o que cada rota irá fazer

customExpress decide as bibliotecas a serem usadas (urlencoded,json)
e vai incluir os controllers 

infraestrutura cuida da conexâo e cria as tabelas

models/atendimentos  tem a função que trata os dados  enviados a  API, onde podem ser incluidas validações e no moneto ele envia  a data de crição do atendimento

GET e POST são dois metodos de envio de dados 

GET envia dados por meio da url 

post envia os dados por meio do body da requisição

