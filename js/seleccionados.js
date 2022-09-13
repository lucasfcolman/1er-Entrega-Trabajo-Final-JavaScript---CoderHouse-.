fetch('.js/materias.json')
.then((response)=> response.json())
.then((data)=>{
dataMaterias = data;
return renderMateriasCarrito(dataMaterias);
})



function renderMateriasCarrito (){
    const materias = cargarMateriasCarrito();
    let contenido = "";
    if(materias.length == 0){
      contenido = `<div class="alert alert-warning text-center" role="alert">No se encuentran materias seleccionadas!</div>`;
    } else {
      materias.forEach(materia => {
        contenido += `<table class ="table">
        <tr>
        <td> ${materia.nombre} </td> 
        <td>  Puntos: ${materia.Puntos}  </td>
        </tr>
        <tr>
        <td><a href "#" class = btn btn-warning onclick="eliminarMateria(${materia.id})">(-)${materia.cantidad}</a></td>
        
        </table>`;
    });
      contenido += `<td>Puntaje Total: ${totalPuntos()}</td>`
    }

    document.getElementById("materias").innerHTML = contenido;

}
renderMateriasCarrito();
actualizarBotonSeleccionados();