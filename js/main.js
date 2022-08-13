let nameCourse = prompt ("Ingrese el nombre de la carrera que esta cursando: ")
let carrera = document.getElementById ("Carrera")
carrera.innerHTML = "Carrera: " + nameCourse;
 let mapaMaterias = document.getElementById("course");
 let map = map.materias (x =>{
    return (`<div> ${x.id} </div>
             <h2> ${x.nombre} </h2>
             <div>${x.Puntos} </div>`  )
 })

document.mapaMaterias.appendChild(map);