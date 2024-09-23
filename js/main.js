



function calcularPrecioTorta() {
    let cantidadPorciones = parseInt(prompt("Ingrese para cuántas personas es la torta"));
    let tipoTorta;
    let precioPorcion;
   
    // Determinar tipo de torta según cantidad de porciones
    for (let i = 0; i < 1; i++) {
        switch (true) {
            case (cantidadPorciones <= 10):
                tipoTorta = "MINI CAKE";
                break;
            case (cantidadPorciones <= 18):
                tipoTorta = "TORTA MEDIANA";
                break;
            case (cantidadPorciones <= 25):
                tipoTorta = "TORTA GRANDE";
                break;
            case (cantidadPorciones >= 26):
                tipoTorta = "TORTA ESPECIAL";
                break;
        }
    }

    alert("Usted necesita una " + tipoTorta);

    // Determinar precio por porción
    if (cantidadPorciones <= 10) {
        precioPorcion = 50;
    } else if (cantidadPorciones <= 18) {
        precioPorcion = 45;
    } else if (cantidadPorciones <= 25) {
        precioPorcion = 40;
    } else if (cantidadPorciones >= 26) {
        precioPorcion = 35;
    }

    let precioTotal = cantidadPorciones * precioPorcion;

    // Preguntar por la decoración
    let decoracion;
    do {
        decoracion = prompt("¿Qué tipo de decoración desea? Opciones: 1) Infantil, 2) Adultos, 3) Comunion, 4) Bautismo");
    } while (decoracion !== "1" && decoracion !== "2" && decoracion !== "3" && decoracion !== "4");

    // Ajustar el precio según la decoración seleccionada
    switch (decoracion) {
        case "1":
            precioTotal *= 1.20;
            break;
        case "2":
            precioTotal *= 1.30;
            break;
        case "3":
            precioTotal *= 1.15;
            break;
        case "4":
            precioTotal *= 1.15;
            break;
    }

 // Hacer descuento
 let topePrecio = 1000;
 while (precioTotal > topePrecio) {
     precioTotal -= 50; // Descuento
 }



    let ttc = ""

    if(decoracion == 1){
        ttc = "TORTA INFANTIL";
        
    }
    if(decoracion == 2){
        ttc = "TORTA ADULTOS";
       
    }
    if(decoracion == 3){
        ttc = "TORTA COMUNION";
        
    }
    if(decoracion == 4){
        ttc = "TORTA BAUTISMO";
        
    }

   


   

    alert("El tipo de torta es "+ tipoTorta + " con decoración de " + ttc + ". Precio total: $" + precioTotal.toFixed(  2));


}



calcularPrecioTorta();







