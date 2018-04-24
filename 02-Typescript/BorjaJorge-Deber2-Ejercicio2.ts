//Definición de la clase generador 1, se establecen por defecto los parametros de potencia y estado apagado
class Generador1 {
    public mNumero: number;
    public mPotencia: number;
    public mEstado: string;
    constructor(
        numero: number
    ){
        this.mNumero = numero;
        this.mPotencia = 62;
        this.mEstado = "apagado";
    }
    public prenderGenerador()
    {
        if (this.mEstado !== "prendido")
            this.mEstado = "prendido";
    }
    public apagarGenerador()
    {
        if (this.mEstado !== "apagado")
            this.mEstado = "apagado";
    }
}
//Definición de la clase generador 2, se establecen por defecto los parametros de potencia y estado apagado
class Generador2 {
    public mNumero: number;
    public mPotencia: number;
    public mEstado: string;
    constructor(
        numero: number
    ){
        this.mNumero = numero;
        this.mPotencia = 124;
        this.mEstado = "apagado";
    }
    public prenderGenerador()
    {
        if (this.mEstado !== "prendido")
            this.mEstado = "prendido";
    }
    public apagarGenerador()
    {
        if (this.mEstado !== "apagado")
            this.mEstado = "apagado";
    }
}
//Creación de generadores de tipo 1
let generador1 : Generador1 = new Generador1(1);
let generador2 : Generador1 = new Generador1(2);
let generador3 : Generador1 = new Generador1(3);
let generador4 : Generador1 = new Generador1(4);
//Creación de generadores de tipo 2
let generador5 : Generador2 = new Generador2(5);
let generador6 : Generador2 = new Generador2(6);
let generador7 : Generador2 = new Generador2(7);
let generador8 : Generador2 = new Generador2(8);
let generador9 : Generador2 = new Generador2(9);
let generador10 : Generador2 = new Generador2(10);
let generador11 : Generador2 = new Generador2(11);
let generador12 : Generador2 = new Generador2(12);
let generador13 : Generador2 = new Generador2(13);
let generador14 : Generador2 = new Generador2(14);
let generador15 : Generador2 = new Generador2(15);
let generador16 : Generador2 = new Generador2(16);
let generador17 : Generador2 = new Generador2(17);
let generador18 : Generador2 = new Generador2(18);
let generador19 : Generador2 = new Generador2(19);

//Creación de dos arreglos, uno para los generadores de tipo 1 y otro para los generadores de tipo 2
let generadoresTipoUno = [generador1,generador2,generador3,generador4];
let generadoresTipoDos = [generador5,generador6,generador7,generador8,generador9,generador10,generador11,generador12,generador13,generador14,generador15,generador16,generador17,generador18,generador19];

//Variables de control para utilizar en el controlador de generadores de tipo 1
let numeroGeneradoresTipoUno = generadoresTipoUno.length;
let totalPotencia = 0;
let contadorGeneradoresUno = 0;
//Función que permite monitorear la potencia total dependiendo del estado de los generadores tipo 1
function controlGeneradoresTipoUno() {
    while (numeroGeneradoresTipoUno > 0)
    {
        if (generadoresTipoUno[contadorGeneradoresUno].mEstado === "apagado")
        {
            console.log(`Generador #${generadoresTipoUno[contadorGeneradoresUno].mNumero} esta ${generadoresTipoUno[contadorGeneradoresUno].mEstado}.`);
            contadorGeneradoresUno++;
            numeroGeneradoresTipoUno--;
        }
        else {
            totalPotencia = totalPotencia + generadoresTipoUno[contadorGeneradoresUno].mPotencia;
            console.log(`Generador #${generadoresTipoUno[contadorGeneradoresUno].mNumero} esta ${generadoresTipoUno[contadorGeneradoresUno].mEstado}, añadiendo ${generadoresTipoUno[contadorGeneradoresUno].mPotencia} MW para un total de ${totalPotencia} MW.`);
            contadorGeneradoresUno++;
            numeroGeneradoresTipoUno--;
        }
    }
}
//Función que permite monitorear la potencia total dependiendo del estado de los generadores tipo 2
function controlGeneradoresTipoDos(){
    for (let contadorGeneradoresDos in generadoresTipoDos)
    {
        if (generadoresTipoDos[contadorGeneradoresDos].mEstado === "apagado")
        {
            console.log(`Generador #${generadoresTipoDos[contadorGeneradoresDos].mNumero} esta ${generadoresTipoDos[contadorGeneradoresDos].mEstado}.`);
        }
        else {
            totalPotencia = totalPotencia + generadoresTipoDos[contadorGeneradoresUno].mPotencia;
            console.log(`Generador #${generadoresTipoDos[contadorGeneradoresDos].mNumero} esta ${generadoresTipoDos[contadorGeneradoresDos].mEstado}, añadiendo ${generadoresTipoDos[contadorGeneradoresDos].mPotencia} MW para un total de ${totalPotencia} MW.`);
        }
    }
}
//función encargada de controlar el estado de todos los generadores
function controlGeneradores()
{
    controlGeneradoresTipoUno();
    controlGeneradoresTipoDos();
}
//Función encargada de encender los generadores que tengan un numero par
function prenderGeneradoresPares()
{
    for (let contador in generadoresTipoUno)
    {
        if (!(generadoresTipoUno[contador].mNumero%2))
            generadoresTipoUno[contador].mEstado = "prendido";
    }
    for (let contador2 in generadoresTipoDos)
    {
        if (!(generadoresTipoDos[contador2].mNumero%2))
            generadoresTipoDos[contador2].mEstado = "prendido";
    }
}
//Función encargada de encender los generadores que tengan un numero impar
function prenderGeneradoresImpares()
{
    for (let contador in generadoresTipoUno)
    {
        if (generadoresTipoUno[contador].mNumero%2)
            generadoresTipoUno[contador].mEstado = "prendido";
    }
    for (let contador2 in generadoresTipoDos)
    {
        if (generadoresTipoDos[contador2].mNumero%2)
            generadoresTipoDos[contador2].mEstado = "prendido";
    }
}
//Función encargada de encender todos los generadores
function prenderGeneradores()
{
    for (let contador in generadoresTipoUno)
    {
        generadoresTipoUno[contador].mEstado = "prendido";
    }
    for (let contador2 in generadoresTipoDos)
    {
        generadoresTipoDos[contador2].mEstado = "prendido";
    }
}
//Función encargada de apagar todos los generadores
function apagarGeneradores()
{
    for (let contador in generadoresTipoUno)
    {
        generadoresTipoUno[contador].mEstado = "apagado";
    }
    for (let contador2 in generadoresTipoDos)
    {
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



