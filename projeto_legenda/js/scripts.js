//const inputTexto = document.getElementById('texto_footer');
//inputTexto.addEventListener('keyup', function (e) {
//    var enter = e.keyCode;
//    if (enter == 13) { // codigo da tecla enter
//        document.getElementById("legenda").innerHTML = this.value;
//alert('carregou enter o valor digitado foi: ' + this.value);
//    }
//});


const inputTexto = document.getElementById('comentario');

inputTexto.addEventListener('keyup', function (e) {
    if (e.which == 13) { // codigo da tecla enter
        document.getElementById("legenda").innerHTML = this.value;
    }
});