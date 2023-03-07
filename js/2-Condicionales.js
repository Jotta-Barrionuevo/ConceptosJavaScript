// estructura condicional if

/*
if(condicion){
    si se cumple la condicion ejecuto este codigo...
}else{
    aqui todo el codigo si no se cumple la condicion
}

*/

// pedir la edad a un usuario
// si tiene desde 16 años tiene que votar
// menores de 16 no votan

let edad = parseInt(prompt(" Ingrese su edad"));
console.log(edad);
console.log(typeof(edad));

console.log(isNaN (edad));
// isNaN = true cuando el contenido no es un numero
// !(true) = false
// !(false) = true

// si el contenido de edad es un numero
if(!isNaN(edad) === true ){


if(edad >= 16 && edad < 18 || edad >= 71){
    document.write("Es optativo votar");
} else if (edad >= 18 && edad <= 70){
    document.write("debe votar");
}else{
    document.write("no debe votar")
    }

}else{
    document.write("Ingresaste un texto en lugar de un numero");

 }
