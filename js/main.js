window.addEventListener ('load', () => {
    let mapaMaterias = document.getElementById("course");
    console.log (mapaMaterias); })
let nameCourse = prompt ("Ingrese el nombre de la carrera que esta cursando: ")
let carrera = document.getElementById ("Carrera")
 carrera.innerHTML = "Carrera: " + nameCourse;

 console.log (materias);
 let map = materias.map (x =>{
    return (`
             <h2>${x.nombre} </h2>
             <div>Puntos: ${x.Puntos} </div>`)
 })
 let mapaMaterias = document.getElementById("course");

mapaMaterias.innerHTML = map.join("");




