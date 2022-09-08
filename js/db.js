
const materias = [
{id: 1, nombre: "Matematicas",Condicion: "Obligatoria", Puntos:3000},
{id: 2, nombre: "Literatura", Condicion: "Opcional", Puntos:1500},
{id: 3, nombre: "Historia", Condicion: "Obligatoria", Puntos:2000},
{id: 4, nombre: "Geografia", Condicion: "Obligatoria", Puntos:3000},
{id: 5, nombre: "Fisica", Condicion: "Obligatoria", Puntos:3500},
{id: 6, nombre: "Quimica", Condicion: "Obligatoria", Puntos:4000},
{id: 7, nombre: "Educacion Fisica", Condicion: "Opcional", Puntos:900},
{id: 8, nombre: "Filosofia", Condicion: "Opcional", Puntos:900}
];

function guardadoDeMateriasLS(materias){
    localStorage.setItem ("materias", JSON.stringify(materias));
}
function cargarMateriasLS (){
    return JSON.parse(localStorage.getItem ("materias")) || [];
}

function guardadoDeMateriasCarrito(materias){
    localStorage.setItem ("materias_seleccionadas", JSON.stringify(materias));
}
function cargarMateriasCarrito (){
    return JSON.parse(localStorage.getItem ("materias_seleccionadas")) || [];
}

function buscarMateria (id){
    const materias = cargarMateriasLS();
    return materias.find (item => item.id === id);
}

function agregarMateria(id){
    const materias_seleccionadas = cargarMateriasCarrito();
    const materia = buscarMateria(id);
    materias_seleccionadas.push(materia);
    guardadoDeMateriasCarrito(materias_seleccionadas);
}

function renderMaterias (){
    const materias = cargarMateriasLS();
    let contenido = "";
    materias.forEach(materia => {
        contenido += `<div class="col-md-3">
        <div class="card" style="width: 18rem;>
        <div class="card-body">
          <h5 class="card-title">Nombre de la Materia: ${materia.nombre}</h5>
          <h6 class="card-subtitle mb-2 text-muted">Condicion: ${materia.Condicion}</h6>
          <p class="card-text">Puntos: ${materia.Puntos}</p>
          <a href="#" class="btn btn-primary" onclick="agregarMateria()${materia.id}">Agregar (+)</a>
        </div>
        </div>
        </div>`
        document.getElementById("materias").innerHTML = contenido;
    });
}

renderMaterias();
guardadoDeMateriasLS(materias);



/*  class course{
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
 */