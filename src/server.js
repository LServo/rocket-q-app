const print = text => console.log(text)
const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)
/* ------------------------------------------------------------ */

const express = require('express')
const route = require('./routes')
const path = require('path')

const server = express()

server.set('view engine', 'ejs')

server.set('views', path.join(__dirname, 'views')) // aqui estamos dizendo que o caminho não é /views, mas sim /src/views, equivalente a ./views

server.use(express.static('public'))

server.use(express.urlencoded({ extended: true })) // para que o express entenda o formulário
// isso é o middleware que faz o express entender o formulário

server.use(route)

server.listen(3000, () => print('Server is running on port 3000'))
