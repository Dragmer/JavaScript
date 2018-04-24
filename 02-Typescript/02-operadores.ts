let arregloNumeros = [1,2,3,4,5];
let arregloDeudas = [12,52,456,48,86];
let arregloUsuarios: UsuarioArreglo[] = [
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
]

let sumarDosNumeros = (numeroUno: number,
                       numeroDos: number) => {
    return numeroUno + numeroDos;
}

let totalEdades = a=>{
    //codigo extra
}

let facultades = (a?:number)=> ['Facultad1','Facultad2'];
facultades();

let resultadoForEach = arregloNumeros.forEach(
    (valor, indice, arreglo)=>{
        console.log('valor',valor);
        console.log('indice',indice);
        console.log('arreglo',arreglo)
    }
)

let sumar = 0;
let resultadoForEach2 = arregloNumeros.forEach(
    (valor, indice, arreglo)=>{
        sumar = sumar + valor;
        console.log(sumar);
    }
)

let resultadoSuma = arregloNumeros.reduce(
    (totalAcumulado, valorArreglo)=>{
        return totalAcumulado - valorArreglo;
    },
    20
);
console.log('resultadoSuma', resultadoSuma);

function calcularDeudaUsuario(edad) {
    return arregloDeudas.reduce(
        (totalAcumulado, deuda:number)=>{
            return totalAcumulado + ((edad/100)*deuda)
        }, 0);
}

let usuariosConCincosAniosMenos = arregloUsuarios
    .map(
        (usuario: UsuarioArreglo)=> {
            usuario.edad = usuario.edad - 5;
            usuario.deuda = calcularDeudaUsuario(usuario.edad);
            return usuario
        }
)

console.log('arreglomutado',usuariosConCincosAniosMenos)

let resultadoEdades = arregloUsuarios.reduce(
    (totalAcumulado, valorArreglo: UsuarioArreglo) =>{
        return totalAcumulado + valorArreglo.edad;
    },
    20
)
console.log('resultadoEdades',resultadoEdades)

interface UsuarioArreglo {
    nombre: string;
    edad: number;
    deuda?: number;
}

