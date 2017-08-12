

$(document).ready(function() {
    
 cuentosPorDefault();
   imagenAgg();
});

function imagenAgg() {
       let count =0;
     for (let value of cuentos) {
         console.log(value);
   $("#principal", {
   
}).append(
    $('<li>', {}).append($('<li>', {}).append($('<a>',{
        'href':'../paginas/cuentos.html',
            'text':"hola"
    }).append(
          $('<div>',{
            'class':'imagenes2'
          }).append(
          $('<img>',{
            'class':'imagenesUl',
              'src': value.imagenes[count]
          })
          
        )
    )
)
       ))
   }

}