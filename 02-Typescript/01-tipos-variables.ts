let segundoNombre = 'Jorge'
const cedula = '1715984389'
const URL_POLI = 'http://www.epn.edu.ec'
segundoNombre = 'Ivan'
/*
No se puede alterar una variable declarada como constante
cedula = '1715984388'
*/
/*Duck Typing
segundoNombre = 123
*/
let nombre: String
let edad: Number = 24
let fecha: Date = new Date()
let casado: boolean = false
//let mascotas:object = {}

class Usuario {
    public mNombre: string
    private mEdad: number
    protected mCedula: string

    constructor(nombre: string,
                edad: number,
                cedula: string) {
        this.mNombre = nombre
        this.mEdad = edad
        this.mCedula = cedula
    }
    public imprimirEnConsola(){
        //Template Strings TILDE INVERTIDA
        console.log(`El usuario se llama ${this.mNombre}
        con cedula ${this.mCedula} y edad ${this.mEdad}`)
    }
}

let usuario: Usuario = new Usuario('Jorge',24,'1715984389');
