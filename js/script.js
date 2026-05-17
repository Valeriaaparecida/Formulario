function meuEscopo (){
    const form = document.querySelector('.form');
    form.onsubmit = function(evento){
        alert(1);
        console.log("Foi enviado um evento");
    };
}