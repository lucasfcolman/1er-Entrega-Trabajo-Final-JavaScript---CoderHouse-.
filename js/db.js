
const materias = [
{id: 1, nombre: "Matematicas", Puntos:3000},
{id: 2, nombre: "Literatura", Puntos:1500},
{id: 3, nombre: "Historia", Puntos:2000},
{id: 4, nombre: "Geografia", Puntos:3000},
{id: 5, nombre: "Fisica", Puntos:3500},
{id: 6, nombre: "Quimica", Puntos:4000},
{id: 7, nombre: "Educacion Fisica", Puntos:900},
{id: 8, nombre: "Filosofia", Puntos:900}
];

class course{
    constructor(objeto) {
    this.id = objeto.id;
    this.nombre = objeto.nombre;
    this.Puntos = objeto.Puntos;
    this.asistencia = 10;
    this.descuentoxasis= 100;
    }
extraporAsistencia(){
        this.Puntos = this.Puntos + ((this.Puntos * this.asistencia)/10);
    }
    restaXasistencia (){
        if (carrito.length > 2){
            this.Puntos = this.Puntos - ((this.Puntos * this.descuentoxasis)/10);
        }
    
    }
}

const carrito =  []






function materiaAgregar (materia){
    carrito.push (materia);
    console.log ("Materia Agregada");
    console.log (carrito);
}



function eliminarMaterias(id){
let pos = carrito.indexOf ((elemento) => elemento.id == id);
carrito.splice (pos, 1)
}

function buscarMateria (id){
    return materias.find((elemento) => elemento.id == id);
}


function agregarMaterias (){
    let salida = "Seleccione la materia por el numero correspondiente:\n\n";
    
    for (let materia of materias){
        salida += materia.id + " - " + materia.nombre + " " + materia.Puntos + "\n" ;
    }

     let id_materia = 0;

    while (id_materia != null) {
        let id_materia = prompt (salida);

        if (id_materia != null){
            id_materia = parseInt (id_materia);

        }   else{
            break;
        }
        console.log (id_materia);
        let materia = buscarMateria (id_materia);
        console.log (materia);
        materiaAgregar (materia);
    } 
}

function mostrarMateriasCarrito (){
    let salida = "Materias seleccionadas:\n\n";
    let total_puntos = 0;


    for (let materia_carrito of carrito){
        let materia = new course (materia_carrito);
        materia.extraporAsistencia();
        materia.restaXasistencia();
        total_puntos += materia.Puntos;
        salida += materia.id + " - " + materia.nombre + materia.Puntos + "\n" ;
}
salida += "Puntos Totales: " + total_puntos;
alert (salida);

}

agregarMaterias();
mostrarMateriasCarrito();
