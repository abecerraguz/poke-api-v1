export const modal = ()=>{
    let outModal = `<div class="modal fade" id="mensajeModal" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-md modal-dialog-scrollable">
    <div class="modal-content">
    <div class="modal-header">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
      <span id="mensaje" class="text-center text-uppercase">Lo sentimos</span>
      <div class="fondo">
        <canvas width="800" height="400" id="myChart"></canvas>
      </div>
    </div>
    <div class="modal-footer">
    </div>
    </div>
    </div>
    </div>`
    return outModal
}


export const mensajeModal = ( info ) =>{
  mensaje.innerHTML = `${info}`
}