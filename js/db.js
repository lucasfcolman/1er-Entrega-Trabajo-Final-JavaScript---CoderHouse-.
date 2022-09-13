
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
    let pos = materias_seleccionadas.findIndex(item => item.id === id);
    
    if (pos < -1){
        materias_seleccionadas[pos].cantidad += 1;
    }else {
        const materias = buscarMateria(id);
        materias.cantidad = 1;
        materias_seleccionadas.push(materias);
    }
    guardadoDeMateriasCarrito(materias_seleccionadas);
    actualizarBotonSeleccionados();
}

function eliminarMateria(id){
    const materias_seleccionadas = cargarMateriasCarrito();
    let pos = materias_seleccionadas.findIndex(item => item.id === id);
    materias_seleccionadas[pos].cantidad -= 1;
    if(materias_seleccionadas[pos].cantidad == 0){
        materias_seleccionadas.splice(pos, 1);
    }
    guardadoDeMateriasCarrito(materias_seleccionadas);
    actualizarBotonSeleccionados();
    renderMateriasCarrito
}


function actualizarBotonSeleccionados(){
    let contenido = `<button type="button" class="btn btn-warning position-relative">
    Seleccionadas
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
     (${totalMaterias()}) 
    </span>
  </button>`
  document.getElementById("boton-carrito").innerHTML = contenido;
}

function totalMaterias(){
    const materias_seleccionadas = cargarMateriasCarrito();
    return materias_seleccionadas.reduce((acumulador, item) => acumulador + item.cantidad, 0);
}
function totalPuntos(){
    const materias_seleccionadas = cargarMateriasCarrito();
    return materias_seleccionadas.reduce((acumulador, item) => acumulador + (item.cantidad*item.Puntos), 0);
}

guardadoDeMateriasLS(materias);
