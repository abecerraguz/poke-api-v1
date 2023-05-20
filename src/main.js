import './style.css'
import javascriptLogo from './public/javascript.svg'
import viteLogo from './public/vite.svg';
import * as UI from './components/interfaz.js'
import nav from './components/nav.js'
import footer from './components/footer.js'
import { modal, mensajeModal } from './components/modal.js'
import getPokeMon from './components/getpokemon.js';




document.querySelector('#app').innerHTML = `
    ${nav(javascriptLogo,'#')}
    <div class="container my-10">
    <div class="row" id="insertDOMcontent">
    </div>
    </div>
    ${footer()}	
    ${modal()}`


let loadingMore = document.querySelector('.loadingMore')

function scrollToBottom() {
  console.log('Salida --->')
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}

loadingMore.addEventListener('click', ( e ) => {
    e.preventDefault();
    let getId = parseInt(e.target.id)
    let numeroIncrementado = getId + 10
    e.target.setAttribute('id', numeroIncrementado)
    console.log(getId)
    getPokeMon(getId)
    scrollToBottom()
})

getPokeMon()

