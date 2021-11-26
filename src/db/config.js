const sqlite3 = require('sqlite3')
const { open } = require('sqlite') // procura e trás apenas o open do sqlite, e define o open como uma constante

module.exports = () => {
  open: open({
    filename: './src/db/rocketq.sqlite', //define nome do banco de dados
    driver: sqlite3.database
  })
}
// o open abre a conexão com o banco de dados, e o driver é o driver do sqlite, que é o sqlite3
// o driver é quem comanda o banco de dados, ou seja, ele que irá exectuar todas as ações que forem enviadas ao banco de dados
