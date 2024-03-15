let otroProducto = 0;
let valormonitor1 = 0;
let valorMonitor2 = 0;
let valorDisco1 = 0;
let valorDisco2 = 0;
let total = 0;
let monitor = 0;
let almacenamientos = 0;
let valorNotebook = 0;
let valorPC = 0;

alert("Bienvenid@ a EBS Informatica");
let nombre = prompt("Estimad@ Cliente cual es tu Nombre: ");
alert("Bienvenid@ " + nombre + " a EBS Informatica");

do {
function opciones() {

    switch (opcion) {
        case 1:
            alert("Estimad@ " + nombre + " a seleccionado Monitores");
            break;
        case 2:
            alert("Estimad@ " + nombre + " a seleccionado Almacenamiento y Discos Duros");
            break;
        case 3:
            alert("Estimad@ " + nombre + " a seleccionado Computadores y Notebook");
            break;
        
        default:
            alert("Ingresa una opcion valida");
    }
}

function monitores() {
    switch(monitor) {
        case 1: 
             alert("El Monitor LG Monitor 20 HD, Panel TN, 75Hz 20MK400H-B tiene un costo de $149.990");
             let comprar = Number(prompt("Desea Agregarlo a su Carrito:\n1- Si\n2- No"));
             
             if(comprar == "1"){
                valormonitor1 = 149990;
                alert("El valor a pagar es: $149.990");
                

            }else if (comprar == "2"){
                alert("No se preocupe en otra oportunidad");
                

            }else {
                alert("Ingrese una opcion valida");
            }
             
        case 2:
            alert("El Monitor Gamer 24 Omen - Full HD, Panel IPS, 165Hz(1ms) tiene un costo de $179.990");
             let comprar1 = Number(prompt("Desea Agregarlo a su Carrito:\n1- Si\n2- No"));
             
             if(comprar1 == "1"){
                valorMonitor2 = 179990;
                alert("El valor a pagar es: $179.990");
                

            }else if (comprar1 == "2"){
                alert("No se preocupe en otra oportunidad");
                

            }else {
                alert("Ingrese una opcion valida");
            }
             
            break;
        default:
            alert("Ingrese una opcion valida");
            
    }

}

function almacenamiento() {
    switch(almacenamientos) {
        case 1: 
             alert("La Unidad SSD 240GB PCIe NVMe M.2 SN350 Green tiene un costo de $39.990");
             let comprar = Number(prompt("Desea Agregarlo a su Carrito:\n1- Si\n2- No"));
             
             if(comprar == "1"){
                valorDisco1 = 39990;
                alert("El valor a pagar es: $39.990");
                

            }else if (comprar == "2"){
                alert("No se preocupe en otra oportunidad");
                

            }else {
                alert("Ingrese una opcion valida");
            }
             
        case 2:
            alert("La Unidad SSD 1TB Sata3 2.5 BX500 Crucial tiene un costo de $79.990");
             let comprar1 = Number(prompt("Desea Agregarlo a su Carrito:\n1- Si\n2- No"));
             
             if(comprar1 == "1"){
                valorDisco2 = 79990;
                alert("El valor a pagar es: $79.990");
                

            }else if (comprar1 == "2"){
                alert("No se preocupe en otra oportunidad");
                

            }else {
                alert("Ingrese una opcion valida");
            }
             
            break;
        default:
            alert("Ingrese una opcion valida");
    }

}

function computers() {
    switch(computadores) {
        case 1: 
             alert("Notebook Victus Ryzen 5 5600H NVIDIA GeForce GTX 1650 4GB 15.6 FHD 8GB RAM 512GB SSD Windows 11 Mica Silver tiene un costo de $549.990");
             let comprar = Number(prompt("Desea Agregarlo a su Carrito:\n1- Si\n2- No"));
             
             if(comprar == "1"){
                valorNotebook = 549990;
                alert("El valor a pagar es: $549.990");
                

            }else if (comprar == "2"){
                alert("No se preocupe en otra oportunidad");
                

            }else {
                alert("Ingrese una opcion valida");
            }
             
        case 2:
            alert("Desktop Vostro 3710 Intel i3-12100 8GB 256GB SSD Windows 10 Pro tiene un costo de $489.990");
             let comprar1 = Number(prompt("Desea Agregarlo a su Carrito:\n1- Si\n2- No"));
             
             if(comprar1 == "1"){
                valorPC = 489990;
                alert("El valor a pagar es: $489.990");
                

            }else if (comprar1 == "2"){
                alert("No se preocupe en otra oportunidad");
                

            }else {
                alert("Ingrese una opcion valida");
            }
             
            break;
        default:
            alert("Ingrese una opcion valida");
    }

}






let opcion = Number(prompt("Que Producto necesitas:\n1- Monitores\n2- Almacenamiento y Discos Duros\n3- Computadores y Notebook"));
    opciones();

if(opcion == "1") { 
     
     monitor = Number(prompt("Tenemos los siguientes modelos disponibles, selecciona uno:\n1- LG Monitor 20 HD, Panel TN, 75Hz 20MK400H-B\n2- Monitor Gamer 24 Omen - Full HD, Panel IPS, 165Hz(1ms)"));
     monitores();
}
else if(opcion == "2") {

    almacenamientos = Number(prompt("Tenemos los siguientes modelos disponibles, selecciona uno:\n1- Unidad SSD 240GB PCIe NVMe M.2 SN350 Green\n2- Crucial Unidad SSD 1TB Sata3 2.5 BX500"));
    almacenamiento();
}
else if(opcion == "3") {

    computadores = Number(prompt("Tenemos los siguientes modelos disponibles, selecciona uno:\n1- Notebook Victus Ryzen 5 5600H NVIDIA GeForce GTX 1650 4GB 15.6 FHD 8GB RAM 512GB SSD Windows 11 Mica Silver\n2- Desktop Vostro 3710 Intel i3-12100 8GB 256GB SSD Windows 10 Pro"));
    computers();
} else{
    alert("Ingresse una opcion valida!");
    
}



total =  valormonitor1 + valorMonitor2 + valorDisco1 + valorDisco2 + valorNotebook + valorPC;
alert("Estimad@ " + nombre + " llevas un total de $: " + total);

otroProducto = Number(prompt("Desea agregar otro Producto:\n1 -Si\n2 -No"));




}while(otroProducto == "1") {
    total =  valormonitor1 + valorMonitor2 + valorDisco1 + valorDisco2 + valorNotebook + valorPC;
    alert ("El valor total es de: " + total );
    let dinero = parseInt(prompt("Con cuanto Dinero cancela"));
    if(dinero < total) {
        alert("Dinero insuficiente para realizar la compra! Gracias por Confiar en Nosotros");
    }else {
            vuelto = dinero - total;
            alert("Su vuelto es de: " + vuelto + " pesos");    
        }

    alert("Gracias " + nombre +  " por su compra en EBS Informatica");
}
