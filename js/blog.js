document.addEventListener("DOMContentLoaded", function(e){
    const parrafos = document.querySelectorAll('.descripcion');

    let alturas = [];
    let alturaMax = 0;

    const aplicarAlturas = (function aplicarAlturas(){

        parrafos.forEach(parrafo =>{
            if(alturaMax == 0){
                console.log(alturaMax);
                alturas.push(parrafo.clientHeight);
            }else{
                console.log(alturaMax);
                parrafo.style.height = alturaMax + "px";
            }


        });
        return aplicarAlturas;
})();

alturaMax = Math.max.apply(Math, alturas);

aplicarAlturas();

});