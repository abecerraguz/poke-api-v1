import * as UI from './interfaz.js'
import getPokeDetails from  './getPokeDetails.js';

const getPokeMon = async (offset='0')=>{
    UI.contentSpinnerLoading.style.display = 'flex'
    try {
        UI.contentSpinnerLoading.style.display = 'flex';
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=10`)
   
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


}
export default getPokeMon