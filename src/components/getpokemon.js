import * as UI from './interfaz.js'
// console.log('Mierda',UI.contentSpinnerLoading)
import getPokeDetails from  './getPokeDetails.js';
// const contentSpinnerLoading = document.querySelector('.contentSpinnerLoading')
// console.log('XXXXX--->',contentSpinnerLoading)
const getPokeMon = async (offset='0')=>{

    UI.contentSpinnerLoading.style.display = 'flex'

    try {
        UI.contentSpinnerLoading.style.display = 'flex';
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`)
        console.log('Salida')
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json()
        const { results } = data
        getPokeDetails(results)
        UI.contentSpinnerLoading.style.display = 'none';
    } catch (error) {
        //console.log(error)
        // mensajeModal(`<p>${error}</p>`)
        // $('#mensajeModal').modal('toggle');
        // setTimeout(() => {
        //     $('#mensajeModal').modal('toggle');
        // }, 3000);
    }

    // fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`)
    //     .then( result =>{
    //         result.json()
    //             .then( respuesta =>{
    //                 const {results} = respuesta
    //                 getPokeDetails(results)
    //                 UI.contentSpinnerLoading.style.display = 'none'
    //                 // console.log('Salida de respuesta-->',results)
                    
    //             })
    //     })
}
export default getPokeMon