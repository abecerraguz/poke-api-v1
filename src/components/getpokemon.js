import * as UI from './interfaz.js'
// console.log('Mierda',UI.contentSpinnerLoading)
import getPokeDetails from  './getPokeDetails.js';
// const contentSpinnerLoading = document.querySelector('.contentSpinnerLoading')
// console.log('XXXXX--->',contentSpinnerLoading)
const getPokeMon = (offset='0')=>{
    UI.contentSpinnerLoading.style.display = 'flex'
    fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`)
        .then( result =>{
            result.json()
                .then( respuesta =>{
                    const {results} = respuesta
                    getPokeDetails(results)
                    UI.contentSpinnerLoading.style.display = 'none'
                    // console.log('Salida de respuesta-->',results)
                    
                })
        })
}
export default getPokeMon