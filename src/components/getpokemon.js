import * as UI from './interfaz.js'
import getPokeDetails from  './getPokeDetails.js';
import filterPokeDetails from './filterPokeDetails.js'
import mensajeModal from './mensajeModal.js';


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
        console.log('Salida de results',results)


        const getPokeMonByName = ( name ) => {
            let filtrado = results.filter( element => element.name == name )
            filterPokeDetails(filtrado)
        }
      
        UI.inputSubmitPokemon.addEventListener('click',(e)=>{
            e.preventDefault()
            let infoPoke = UI.inputfindPokemon.value
            console.log( 'Salida',  infoPoke.length )
            if(infoPoke.length > 0 ){
                getPokeMonByName(infoPoke)
            }else{
              mensajeModal(`<p class="mb-0">Lo sentimos debe ingresar un nombre</p>`)
            }
        })



        results.forEach(element => {
            UI.selectInfoPokemon.innerHTML += `<option value="${element.name}">${element.name}</option>`
        });
        UI.selectInfoPokemon.addEventListener('change',(e)=>{
            UI.inputfindPokemon.value = e.target.value
        })

      


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

UI.inputResetPokemon.addEventListener('click',(e)=>{
    e.preventDefault();
    UI.insertDOMcontent.replaceChildren()
    getPokeMon()
})