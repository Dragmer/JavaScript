var arregloNumeros = [1, 2, 3, 4, 5];
var arregloDeudas = [12, 52, 456, 48, 86];
var arregloUsuarios = [
    {
        nombre: 'Jorge1',
        edad: 28
    },
    {
        nombre: 'Jorge2',
        edad: 10
    },
    {
        nombre: 'Jorge3',
        edad: 70
    },
    {
        nombre: 'Jorge4',
        edad: 32
    },
    {
        nombre: 'Jorge5',
        edad: 25
    },
];
var sumarDosNumeros = function (numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};
var totalEdades = function (a) {
    //codigo extra
};
var facultades = function (a) { return ['Facultad1', 'Facultad2']; };
facultades();
var resultadoForEach = arregloNumeros.forEach(function (valor, indice, arreglo) {
    console.log('valor', valor);
    console.log('indice', indice);
    console.log('arreglo', arreglo);
});
var sumar = 0;
var resultadoForEach2 = arregloNumeros.forEach(function (valor, indice, arreglo) {
    sumar = sumar + valor;
    console.log(sumar);
});
var resultadoSuma = arregloNumeros.reduce(function (totalAcumulado, valorArreglo) {
    return totalAcumulado - valorArreglo;
}, 20);
console.log('resultadoSuma', resultadoSuma);
function calcularDeudaUsuario(edad) {
    return arregloDeudas.reduce(function (totalAcumulado, deuda) {
        return totalAcumulado + ((edad / 100) * deuda);
    }, 0);
}
var usuariosConCincosAniosMenos = arregloUsuarios
    .map(function (usuario) {
    usuario.edad = usuario.edad - 5;
    usuario.deuda = calcularDeudaUsuario(usuario.edad);
    return usuario;
});
console.log('arreglomutado', usuariosConCincosAniosMenos);
var resultadoEdades = arregloUsuarios.reduce(function (totalAcumulado, valorArreglo) {
    return totalAcumulado + valorArreglo.edad;
}, 20);
console.log('resultadoEdades', resultadoEdades);
