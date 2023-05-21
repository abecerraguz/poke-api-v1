import * as UI from './interfaz.js'
let myModal = new bootstrap.Modal( document.querySelector('#mensajeModal'), {keyboard:false} )
const mensajeModal = ( info ) =>{
    UI.mensaje.innerHTML = `${info}`
    myModal.toggle();
}
export default mensajeModal