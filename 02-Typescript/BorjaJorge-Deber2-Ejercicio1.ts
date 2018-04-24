//Definicion del arreglo a analizar
let arreglo = [1,2,"tres",false,"uno"];

//Implementación de la funcion encargada de validar el numero de strings en el arreglo, se envía como parametro el arreglo
function validarNumeroDeStringEnArreglo(arreglo) {
    //Definición de variable para el conteo de strings
    let numeroString;
    numeroString = 0;
    //Sentencia de control encargada de evaluar el arreglo
    for (let aux in arreglo)
    {
        //Definición de variable que analiza el tipo de dato segun el indice aux
        let tipoEntrada = typeof arreglo[aux];
        if (tipoEntrada === "string")
            numeroString = numeroString +1;
    }
    return numeroString;
}
//Ejecución de la función
let numeroDeStringEnArreglo = validarNumeroDeStringEnArreglo(arreglo);
//Presentación de resultados
console.log("La cadena a evaluar es: ",arreglo);
console.log("El numero de strings en la cadena es: ",numeroDeStringEnArreglo);