const express = require('express')
const QuestionController = require('./controllers/QuestionController')
const RoomController = require('./controllers/RoomController')

const route = express.Router()

route.get('/create-pass', (req, res) =>
  res.render('index', { page: 'create-pass' })
)
route.get('/', (req, res) => res.render('index', { page: 'enter-room' }))
route.get('index', (req, res) => res.redirect('/'))

route.get('/room/:room', RoomController.open)
route.post('/create-room', RoomController.create)
route.post('/enter-room', RoomController.enter)

//Formato que o formulário  dentro da modal tem que passar a informação
route.post('/question/:room/:question/:action', QuestionController.index)
route.post('/question/create/:room', QuestionController.create)

module.exports = route
