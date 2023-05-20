import selectAllButtos from './selectAllButtos.js';

let arr = []

const getPokeDetails = async ( detalle ) => {
    for( const file of detalle ) {
        // console.log('XXXXXXXXXX?--->', file.url)
        const contents = await fetch(file.url)
        const res = await contents.json()
        console.log('ZZZZZ---->', res);
        const { sprites, name, abilities, weight, order, id, stats } = res
        const dataPoke = {
            idPoke: id,
            imagePrincipal: sprites.other.dream_world.front_default,
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
        // insertDOMcontent.innerHTML = ` `
        insertDOMcontent.innerHTML += `<div class="col-md-3 mb-3"><div class="card">
                <span class="numPoke">${idPoke}</span>
                <img src="${imagePrincipal}" class="card-img-top" alt="${nombre}">
                <div class="card-body">
                <div class="d-grid gap-2">
                <button class="btn btn-primary text-uppercase" id="${idPoke}" type="button">${nombre}</button>
                </div>
            </div>
        </div></div>`
        arr.push(dataPoke)
        selectAllButtos(arr)
    }

}
export default getPokeDetails