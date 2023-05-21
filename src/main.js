import './style.css'
import * as UI from './components/interfaz.js'
import getPokeMon from './components/getpokemon.js';
import mensajeModal from './components/mensajeModal';


// function scrollToBottom() {
//   window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
// }

if( typeof window === 'object' ){

	// INICIO DEL DOMContentLoaded
	window.addEventListener('DOMContentLoaded', function(){

    UI.loadingMore.addEventListener('click', ( e ) => {
      e.preventDefault();
      let getId = parseInt(e.target.id)
      let numeroIncrementado = getId + 10
      e.target.setAttribute('id', numeroIncrementado)
      getPokeMon(getId)
      // scrollToBottom()
    })
  
  
    // INICIA LA BUSQUEDA
    getPokeMon()

	})

}



