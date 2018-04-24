//Define la cantidad de osos con los que se inicia
const ososIniciales = 4;
//Crea una función para calcular la cantidad de osos que existirán luego de x meses
function aumentoPoblacionOsos(meses: number) {
    //Definición de variables de control
    let ososFinales = 0;
    let resultado = "";
    let exponente = meses + 1;
    //Calculo exponencial de la cantidad de osos
    ososFinales = Math.pow(ososIniciales,exponente);
    //Segun requerimiento se debe cortar la muestra a la mitad en caso de que los sos superen las 10000 unidades
    if (ososFinales > 10000)
    {
        let ososRemovidos = 0;
        ososRemovidos = ososFinales /2;
        resultado = `Removiendo ${ososRemovidos} osos de anteojos de la población.
Van a existir ${ososRemovidos} osos de anteojos después del mes ${meses}.`;
    }
    //En caso de que no superen las 10000 unidades
    else
    {
        resultado = `Van a existir ${ososFinales} osos de anteojos después del mes ${meses}.`;
    }
    return resultado;
}

//Comprobación de la función, desde 1, 5 y 7 meses
console.log(aumentoPoblacionOsos(1));
console.log(aumentoPoblacionOsos(5));
console.log(aumentoPoblacionOsos(7));





