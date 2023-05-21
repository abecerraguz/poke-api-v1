import rederGrafico from './rederGrafico.js'
import mensajeModal from './mensajeModal.js'
const selectAllButtos = ( arr ) => {
  
    const allButtons = document.querySelectorAll('#insertDOMcontent div.col-md-3.mb-3 button')
    allButtons.forEach((element)=>{
        element.addEventListener('click', (e)=>{
            e.preventDefault();
            let idButton = e.target.id
            // console.log('Salidaaaaa-->', idButton )
            console.log('Salida--->', arr )
            let seObtiene = arr.find( element => element.idPoke == idButton )
            console.log('Salida de seObtiene--->', seObtiene)
            const { nombre, imagePrincipal, imagenUno, imagenDos, imagenTres, imagenCuatro, peso, numero, habilidades, estado } = seObtiene
           
            let habilty = habilidades.map( element => element.ability.name)
            
            mensajeModal(`<div class="contenInfo">
            <div class="contentInfo__data">
            <div class="contentInfo__header">
            <p class="text-uppercase">${nombre}</p>
            </div>
        </div>

    <div class="contentInfo__data">
        <div class="contentInfo__header">
            <div class="row">
                <div class="col-md-3"><img loading="lazy" src="${imagenUno}" alt="${nombre}"></div>
                <div class="col-md-3"><img loading="lazy" src="${imagenDos}" alt="${nombre}"></div>
                <div class="col-md-3"><img loading="lazy" src="${imagenTres}" alt="${nombre}"></div>
                <div class="col-md-3"><img loading="lazy" src="${imagenCuatro}" alt="${nombre}"></div>
            </div>
        </div>
        <div class="contentInfo__text">
        <table class="table">
        <thead>
            <tr>
                <th class="text-center" scope="col"><span class="font-weight-bold text-uppercase text-white">Numero</span>
                </th>
                <th class="text-center" scope="col"><span class="font-weight-bold text-uppercase text-white">Peso</span>
                </th>
                <th class="text-center" scope="col"><span
                class="font-weight-bold text-uppercase text-white">Habilidades</span></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td class="text-white text-center">${numero}</td>
                <td class="text-white text-center">${peso}</td>
                <td class="text-white text-center">${habilty.join(" ")}</td>
            </tr>
        </tbody>
    </table>
        </div>
    </div>
</div>`)
            rederGrafico( nombre,estado )
            // myModal.toggle();
        })
    })
}

export default selectAllButtos