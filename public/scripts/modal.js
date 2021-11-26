const print = text => console.log(text)
const $ = selector => document.querySelector(selector)
const $$ = selector => document.querySelectorAll(selector)
/* ------------------------------------------------------------ */
const Modal = () => {
  const modalWrapper = $('.modal-wrapper')
  const cancelButton = $('.button.cancel')
  cancelButton.addEventListener('click', close)
  const open = () => {
    // atribuir active ao modal
    modalWrapper.classList.add('active')
  }
  const close = () => {
    // remover active do modal
    modalWrapper.classList.remove('active')
  }

  return { open, close }
}
