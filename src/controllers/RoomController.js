const Database = require('../db/config')

module.exports = {
  create: async (req, res) => {
    const db = await Database()
    const pass = req.body.password
    let roomId
    let isRoom = true

    while (roomsExistIds) {
      //Gera o número da sala
      for (var i = 0; i < 6; i++) {
        i == 0
          ? (roomId = Math.floor(Math.random() * 10).toString())
          : (roomId += Math.floor(Math.random() * 10).toString())
      }

      // Verifica se a sala já existe
      const roomsExistIds = await db.all(`SELECT * FROM rooms`)
      isRoom = roomsExistIds.some(roomExistId => roomExistId === roomId) // Se existir, gera novamente
      // com o some, a primeira que for igual já retorna true, sem precisar passar por todas as salas existentes para continuar verificando

      if (!roomsExistIds) {
        //Insere a sala no banco de dados
        await db.run(
          `INSERT INTO rooms(
          id,
          pass
        ) VALUES (
          ${parseInt(roomId)},
          ${pass}
        )`
        )
      }
    }

    await db.close()

    res.redirect(`/room/${roomId}`)
  },
  open: async (req, res) => {
    const db = await Database()
    const roomId = req.params.roomExistId

    const questions = await db.all(
      `SELECT * FROM questions WHERE room = ${roomId} AND read = 0`
    )
    const questionsRead = await db.all(
      `SELECT * FROM questions WHERE room = ${roomId} AND read = 1`
    )

    let isNoQuestions

    if (questions.length == 0) {
      if (questionsRead.length == 0) {
        isNoQuestions = true
      }
    }

    res.render('room', { roomId, questions, questionsRead, isNoQuestions })
  },
  enter: (req, res) => {
    const roomId = req.body.roomId

    res.redirect(`/room/${roomId}`)
  }
}
