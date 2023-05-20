const nav = (logo,url)=>{
    let salida = `<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
    <a class="navbar-brand" href="${url}">
            <img src="${logo}" alt="">
            Busca un Pokemon</a>
        <form id="formulario">
            <div class="row">
                <div class="col-10">
                    <input type="text" class="form-control" id="findPicture"  placeholder="Buscar películas">
                </div>
                <div class="col-2">
                    <input type="submit" class="btn btn-warning" type="submit" value="BUSCAR">
                </div>
            </div>
        </form>
        <!-- INICIO FORMULARIO -->  
    </div>
    </nav>`
    return salida
}
export default nav