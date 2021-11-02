let open = document.querySelector(".open")
let close = document.querySelector(".close")
let body = document.body
let btn = document.querySelector(".button-default")
let btn2 = document.querySelector("#portifolio-btn")
let sub = document.querySelector("#submit")

function themeDark(){
  open.classList.toggle('ativo')
  close.classList.toggle('ativo')
  body.classList.toggle('ativo')
  btn.classList.toggle('ativo')
  btn2.classList.toggle('ativo')
  sub.classList.toggle('ativo')
}

close.addEventListener('click', themeDark )
open.addEventListener('click', themeDark )
