const print = text => console.log(text)
const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)
/* ------------------------------------------------------------ */
import Modal from './modal.js'

const modal = Modal()

const modalTitle = $('.modal h2')
const modalDescription = $('.modal p')
const modalButton = $('.modal button')

const checkButtons = $$('.actions a.check')

checkButtons.forEach(button => {
  button.addEventListener('click', handleClick)
})

const deleteButton = $$('.actions .delete')

deleteButton.forEach(button => {
  button.addEventListener('click', event => handleClick(event, false))
})

const handleClick = (event, check = true) => {
  const text = check ? 'Marcar como lida' : 'Excluir'
  const slug = check ? 'check' : 'delete'

  const roomId = $('#room-id').dataset.id
  const questionId = event.target.dataset.id

  const form = $('.modal form')
  form.setAttribute('action', `/question/${roomId}/${questionId}/${slug}`)

  modalTitle.innerHTML = `${text} esta pergunta?`
  modalDescription.innerHTML = `Tem certeza que deseja ${text.toLowerCase()} esta pergunta?`
  modalButton.innerHTML = `Sim, ${text.toLowerCase()}`
  check ? modalButton.classList.remove('red') : modalButton.classList.add('red')

  modal.open()
}
