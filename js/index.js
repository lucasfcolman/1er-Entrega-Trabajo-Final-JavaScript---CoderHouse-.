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
          <a href="#" class="btn btn-primary" onclick="agregarMateria(${materia.id})">Agregar (+)</a>
        </div>
        </div>
        </div>`
        document.getElementById("materias").innerHTML = contenido;
    });
}
renderMaterias();
actualizarBotonSeleccionados();