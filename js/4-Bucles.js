// while
/*
while (condicion logica){

    todo el codigo que quiero repetir
    alguna linea que haga que mi condicion logica deje de cumplir
}
*/

let contador = 2;

while(contador <= 10){


    document.write("este es un parrafo N" +(contador)+"<br>");
    //contador = contador +1
    //contador ++; // contador = contador +1;
    contador += 2; // contador= contador +2;

}

// do-while
/*
do{
    todas las lineas de codigo 
    cambiar la condicion

}while(condicion)
*/

let renglon =100;
do{

    document.write(`este es el renglon N${renglon}<br>`);
    renglon+=2; //renglon = renglon +2

}while(renglon <=9);

// for (inicializar una variable ; va si o si , condicion logica, tender a que la condicion no se cumpla)

for(let i = 10; i > 0; i--){
    document.write(`Esta es la linea N${i}<br>`);

}


