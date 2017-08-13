var a =0;
var cuentosFinales=[];     



$(document).ready(function () {
    cuentosPorDefault();
    imagenDefault();
    imagenAgg();
    
    //slider
$('body').on('click', '#principal a', function(){
    //alert($(this).attr('id'));
   a=$(this).attr('id');
    obj=cuentosFinales[a]
    for (let imagenes of obj.imagenes)
    console.log(a);
         $(".carousel-inner").append('<div class="item"><img src=' + imagenes + '</a></div>');
  })


});

function imagenAgg() {
    var aux = getCuentosLS();
   
    for (let value of aux) {
 cuentosFinales.push(value);
        $("#principal").append('<li><a id='+ a.toString()+ ' href="../paginas/cuento.html"><div class="col-lg-4"><img class="imagenesCuentos"  src=' + value.imagenes[0] + '>' + value.titulo + '</div></a></li>');
a++;
    }


}

function imagenDefault() {
 
    for (let value of cuentos) {
       cuentosFinales.push(value);
        $("#principal").append('<li><a id='+ a.toString()+ '  href="../paginas/cuento.html"><div class="col-lg-4"><img class="imagenesCuentos"  src=' + value.imagenes[0] + '>' + value.titulo + '</div></a></li>');
a++;
    }


}


