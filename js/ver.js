var a = 0;
var cuentosFinales = [];

function imagenAgg() {
    var aux = getCuentosLS();

    for (let value of aux) {
        cuentosFinales.push(value);
        $("#principal").append('<li><a id=' + a.toString() + ' href="../paginas/cuento.html"><div class="col-lg-4"><img class="imagenesCuentos"  src=' + value.imagenes[0] + '>' + value.titulo + '</div></a></li>');
        a++;
    }


}

function imagenDefault() {

    for (let value of cuentos) {
        cuentosFinales.push(value);
        $("#principal").append('<li><a id=' + a.toString() + '><div class="col-lg-4"><img alt=" " class="imagenesCuentos"  src=' + value.imagenes[0] + '>' + value.titulo + '</div></a></li>');
        a++;
    }


}

$(document).ready(function () {
    cuentosPorDefault();
    imagenDefault();
    imagenAgg();

    // Get the modal
    var modal = document.getElementById('myModal');

    // Get the button that opens the modal
    var btn = document.getElementById("myBtn");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];



    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
        modal.style.display = "none";

    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";

        }
    }


    $('body').on('click', '#principal a', function () {
        modal.style.display = "block";
        a = $(this).attr('id');
        mostrarCuento(a);


    });
});


function mostrarCuento(v) {
   
    $("#nombreCuento").text(cuentosFinales[v].titulo);
    $("#descripcion").text(cuentosFinales[v].descripcion);
    $("#creditos").text(cuentosFinales[v].creditos);
    var n=1;
    for(let imagens of cuentosFinales[v].imagenes){
         $("#slideshow").append('<div class="contenedoraSlider"><img   alt=" " class="imagenSlider" src="'+  imagens +'  "></div>');
       n++;
  }  
   
}
