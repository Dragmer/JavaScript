//Definición de la clase generador 1, se establecen por defecto los parametros de potencia y estado apagado
var Generador1 = /** @class */ (function () {
    function Generador1(numero) {
        this.mNumero = numero;
        this.mPotencia = 62;
        this.mEstado = "apagado";
    }
    Generador1.prototype.prenderGenerador = function () {
        if (this.mEstado !== "prendido")
            this.mEstado = "prendido";
    };
    Generador1.prototype.apagarGenerador = function () {
        if (this.mEstado !== "apagado")
            this.mEstado = "apagado";
    };
    return Generador1;
}());
//Definición de la clase generador 2, se establecen por defecto los parametros de potencia y estado apagado
var Generador2 = /** @class */ (function () {
    function Generador2(numero) {
        this.mNumero = numero;
        this.mPotencia = 124;
        this.mEstado = "apagado";
    }
    Generador2.prototype.prenderGenerador = function () {
        if (this.mEstado !== "prendido")
            this.mEstado = "prendido";
    };
    Generador2.prototype.apagarGenerador = function () {
        if (this.mEstado !== "apagado")
            this.mEstado = "apagado";
    };
    return Generador2;
}());
//Creación de generadores de tipo 1
var generador1 = new Generador1(1);
var generador2 = new Generador1(2);
var generador3 = new Generador1(3);
var generador4 = new Generador1(4);
//Creación de generadores de tipo 2
var generador5 = new Generador2(5);
var generador6 = new Generador2(6);
var generador7 = new Generador2(7);
var generador8 = new Generador2(8);
var generador9 = new Generador2(9);
var generador10 = new Generador2(10);
var generador11 = new Generador2(11);
var generador12 = new Generador2(12);
var generador13 = new Generador2(13);
var generador14 = new Generador2(14);
var generador15 = new Generador2(15);
var generador16 = new Generador2(16);
var generador17 = new Generador2(17);
var generador18 = new Generador2(18);
var generador19 = new Generador2(19);
//Creación de dos arreglos, uno para los generadores de tipo 1 y otro para los generadores de tipo 2
var generadoresTipoUno = [generador1, generador2, generador3, generador4];
var generadoresTipoDos = [generador5, generador6, generador7, generador8, generador9, generador10, generador11, generador12, generador13, generador14, generador15, generador16, generador17, generador18, generador19];
//Variables de control para utilizar en el controlador de generadores de tipo 1
var numeroGeneradoresTipoUno = generadoresTipoUno.length;
var totalPotencia = 0;
var contadorGeneradoresUno = 0;
//Función que permite monitorear la potencia total dependiendo del estado de los generadores tipo 1
function controlGeneradoresTipoUno() {
    while (numeroGeneradoresTipoUno > 0) {
        if (generadoresTipoUno[contadorGeneradoresUno].mEstado === "apagado") {
            console.log("Generador #" + generadoresTipoUno[contadorGeneradoresUno].mNumero + " esta " + generadoresTipoUno[contadorGeneradoresUno].mEstado + ".");
            contadorGeneradoresUno++;
            numeroGeneradoresTipoUno--;
        }
        else {
            totalPotencia = totalPotencia + generadoresTipoUno[contadorGeneradoresUno].mPotencia;
            console.log("Generador #" + generadoresTipoUno[contadorGeneradoresUno].mNumero + " esta " + generadoresTipoUno[contadorGeneradoresUno].mEstado + ", a\u00F1adiendo " + generadoresTipoUno[contadorGeneradoresUno].mPotencia + " MW para un total de " + totalPotencia + " MW.");
            contadorGeneradoresUno++;
            numeroGeneradoresTipoUno--;
        }
    }
}
//Función que permite monitorear la potencia total dependiendo del estado de los generadores tipo 2
function controlGeneradoresTipoDos() {
    for (var contadorGeneradoresDos in generadoresTipoDos) {
        if (generadoresTipoDos[contadorGeneradoresDos].mEstado === "apagado") {
            console.log("Generador #" + generadoresTipoDos[contadorGeneradoresDos].mNumero + " esta " + generadoresTipoDos[contadorGeneradoresDos].mEstado + ".");
        }
        else {
            totalPotencia = totalPotencia + generadoresTipoDos[contadorGeneradoresUno].mPotencia;
            console.log("Generador #" + generadoresTipoDos[contadorGeneradoresDos].mNumero + " esta " + generadoresTipoDos[contadorGeneradoresDos].mEstado + ", a\u00F1adiendo " + generadoresTipoDos[contadorGeneradoresDos].mPotencia + " MW para un total de " + totalPotencia + " MW.");
        }
    }
}
//función encargada de controlar el estado de todos los generadores
function controlGeneradores() {
    controlGeneradoresTipoUno();
    controlGeneradoresTipoDos();
}
//Función encargada de encender los generadores que tengan un numero par
function prenderGeneradoresPares() {
    for (var contador in generadoresTipoUno) {
        if (!(generadoresTipoUno[contador].mNumero % 2))
            generadoresTipoUno[contador].mEstado = "prendido";
    }
    for (var contador2 in generadoresTipoDos) {
        if (!(generadoresTipoDos[contador2].mNumero % 2))
            generadoresTipoDos[contador2].mEstado = "prendido";
    }
}
//Función encargada de encender los generadores que tengan un numero impar
function prenderGeneradoresImpares() {
    for (var contador in generadoresTipoUno) {
        if (generadoresTipoUno[contador].mNumero % 2)
            generadoresTipoUno[contador].mEstado = "prendido";
    }
    for (var contador2 in generadoresTipoDos) {
        if (generadoresTipoDos[contador2].mNumero % 2)
            generadoresTipoDos[contador2].mEstado = "prendido";
    }
}
//Función encargada de encender todos los generadores
function prenderGeneradores() {
    for (var contador in generadoresTipoUno) {
        generadoresTipoUno[contador].mEstado = "prendido";
    }
    for (var contador2 in generadoresTipoDos) {
        generadoresTipoDos[contador2].mEstado = "prendido";
    }
}
//Función encargada de apagar todos los generadores
function apagarGeneradores() {
    for (var contador in generadoresTipoUno) {
        generadoresTipoUno[contador].mEstado = "apagado";
    }
    for (var contador2 in generadoresTipoDos) {
        generadoresTipoDos[contador2].mEstado = "apagado";
    }
}
//Ejecución de la función que enciende todos los generadores
prenderGeneradores();
//Ejecución de la función que apaga todos los generadores
apagarGeneradores();
//Ejecución de la función que enciende los generadores con número par
prenderGeneradoresPares();
//Ejecución de la función que enciende los generadores con número impar
prenderGeneradoresImpares();
//Ejecución de la función de control
controlGeneradores();
