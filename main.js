import './style.css'
import '@picocss/pico'
const formConsultarPerfil = document.querySelector('#consultarPerfil')
const inputPerfil = formConsultarPerfil.perfil
const divDados = document.querySelector('#dados')
const btnConsultarPerfil = document.querySelector('#btnConsultarPerfil')

formConsultarPerfil.addEventListener('submit', function (event) {
  event.preventDefault() 
  consultarPerfil(inputPerfil.value)
})

async function consultarPerfil(perfil){
  let reponse = await fetch(`https://api.github.com/users/${perfil}`)
  let dadosPerfil = await reponse.json()
  if(dadosPerfil.name === undefined){
    divDados.innerHTML=`<div class="erro">Perfil não encontrado!</div>`
  }else{
    divDados.innerHTML = `
    <img src="${dadosPerfil.avatar_url}" alt="">
    <h1>${dadosPerfil.name}</h1>
    <a href="${dadosPerfil.html_url}">Perfil no GitHub</a>
   `
  }
}
