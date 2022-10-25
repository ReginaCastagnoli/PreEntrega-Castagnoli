const precioAlmendra = 200;
const precioHogareña = 150;
const precioEco = 100;
const precioClasica = 200;
const precioAtrapaClasico = 300;
const precioArbol = 250;
const precioAtrapaFrase = 350;

const precioSi = 200;
const precioNo = 0;

let flag;
do {
    const productoElegido = prompt(`Ingrese el numero del producto elegido
 1. Vela Almendra
 2. Vela Hogareña
 3. Vela Eco
 4. Vela Clasica
 5. Atrapasueño Clasico
 6. Atrapasueño Arbol de la vida
 7. Atrapasueño con Frase
 8. Ninguno
`);

 if( productoElegido == 8){
        break;
    
    }

    const adicionalElegido = prompt(`Quiere agregarle su nombre perzonalizado?
 1. si
 2. no
`);

    alert("Usted eligio el producto nº" + productoElegido);
    console.log("adicionalElegido " + adicionalElegido);
   

    flag = prompt(`Quiere comprar otro producto? Y/N`);
    console.log("flag", flag);
} while (flag != 'N');



