import selectAllButtos from './selectAllButtos.js';
import * as UI from './interfaz.js'



const filterPokeDetails = async ( file ) => {

    console.log( 'Mierda---->', file )

        const contents = await fetch(file[0].url)
        const res = await contents.json()
        console.log('ZZZZZ---->', res);
        const { sprites, name, abilities, weight, order, id, stats } = res
        const dataPoke = {
            idPoke: id,
            imagePrincipal: sprites.other['official-artwork'].front_default,
            imagenUno: sprites.front_default,
            imagenDos: sprites.front_shiny,
            imagenTres: sprites.back_default,
            imagenCuatro: sprites.back_shiny,
            nombre: name,
            habilidades: abilities,
            peso: weight,
            numero: order,
            estado:stats
        }
        const { nombre, imagePrincipal, idPoke } = dataPoke
        UI.insertDOMcontent.replaceChildren()
        UI.insertDOMcontent.innerHTML = `<div class="cardCentrado"><div class="card">
                <span class="numPoke">${idPoke}</span>
                <img src="${imagePrincipal}" class="card-img-top" alt="${nombre}">
                <div class="card-body">
                <div class="d-grid gap-2">
                <button class="btn btn-primary text-uppercase" id="${idPoke}" type="button">${nombre}</button>
                </div>
            </div>
        </div></div>`
        selectAllButtos(dataPoke)

}
export default filterPokeDetails