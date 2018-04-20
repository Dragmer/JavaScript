var segundoNombre = 'Jorge';
var cedula = '1715984389';
var URL_POLI = 'http://www.epn.edu.ec';
segundoNombre = 'Ivan';
/*
No se puede alterar una variable declarada como constante
cedula = '1715984388'
*/
/*Duck Typing
segundoNombre = 123
*/
var nombre;
var edad = 24;
var fecha = new Date();
var casado = false;
//let mascotas:object = {}
var Usuario = /** @class */ (function () {
    function Usuario(nombre, edad, cedula) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }
    Usuario.prototype.imprimirEnConsola = function () {
        //Template Strings TILDE INVERTIDA
        console.log("El usuario se llama " + this.mNombre + "\n        con cedula " + this.mCedula + " y edad " + this.mEdad);
    };
    return Usuario;
}());
var usuario = new Usuario('Jorge', 24, '1715984389');
console.log('usuario', usuario);
var usuarioOtro = {
    mNombre: 'Ivan',
    mEdad: '24',
    mCedula: '1715984389'
};
console.log('usuarioOtro', usuarioOtro);
function noHagoNada() { }
console.log('No hace nada', noHagoNada());
//Buena practica
var UsuarioTres = /** @class */ (function () {
    function UsuarioTres(mNombre, mEdad, mCedula) {
        this.mNombre = mNombre;
        this.mEdad = mEdad;
        this.mCedula = mCedula;
    }
    return UsuarioTres;
}());
