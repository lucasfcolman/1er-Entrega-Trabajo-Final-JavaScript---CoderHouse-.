class Alumno {
    constructor (object){
        this.nombre = object.nombre;
        this.email = object.email;
        this.password = object.password;
    }
    }
 
   let arrayAlumnos  =  [];
   let miFormulario = document.getElementById("formulario");
   let inputNombre = document.getElementById("iNombre");
   let btnMostrar  = document.getElementById("btnMostrar");

   let nombreI = miFormulario.children [1].value;
   let emailI = miFormulario.children [3].value;
   let passwordI = miFormulario.children [5].value;
   

   let contenedor = document.getElementById ("alumnoIngresado");
   let displayTodos = document.getElementById ("displayTodos");
   let parrafos = displayTodos.getElementsByTagName ("div");
   let flag = false;

   miFormulario.addEventListener ("submit", agregarAlumnos);
   btnMostrar.addEventListener("click", mostrarTodosAlumnos);


   inputNombre.focus();


   function validarForm(){
   nombreI = miFormulario.children[1].value;
   emailI = miFormulario.children[3].value;
   passwordI = miFormulario.children[5].value;
   console.log(nombreI);
   console.log(emailI);
   console.log(passwordI);
   }


   function agregarAlumnos (e){
    e.preventDefault ();
    validarForm();
    if (flag == true) {
        let opcion = confirm ("Seguro que quiere agregar alumno?");
        if (opcion == true){
            miFormulario = e.target;
            arrayAlumnos.push (new Alumno (nombreI, emailI, passwordI));
        } else if (nombreI =="" || emailI == "" || passwordI ==""){
            alert ("ERROR - COMPLETAR LOS CAMPOS PARA CONTINUAR: ");
            inputNombre.focus();
            flag = false;} else {alert ("El usuario no se agregara");
            flag = true;   
   }
   }
   }
   console.log (miFormulario.children[1].value= "");
   console.log (miFormulario.children[3].value="");
   console.log (miFormulario.children[5].value="");
   console.log (contenedor.innerHTML ="");
   
   inputNombre.focus();
   


   function AgregarAlDom (){
    contenedor.innerHTML = `<h3>Ultimo Alumno Ingresado: </h3>
                            <p><strong>Nombre: </strong> ${nombreI}</p>}
                            <p><strong>Email: </strong> ${emailI}</p>
                            <p><strong>Password:</strong> ${passwordI}</p>`;}


 function mostrarTodosAlumnos (){
    let i = 0;
    displayTodos.innerHTML = `<h3> Listado de todos los Alumnos: </h3>
                              <div><strong>Nombre: </strong> ${nombreI}</div>
                              <div><strong>Email: </strong> ${emailI}</div>
                              <div><strong>Password: </strong> ${passwordI}</div>`
    }


function datosGuardados(){
    let nombreI = miFormulario.children [1].value;
    let emailI = miFormulario.children [3].value;
    let passwordI = miFormulario.children [5].value;
    const datos = {nombre:nombreI, email:emailI, password:passwordI};
    console.log(datos);
    guardarDatosLS(datos)

}


  function guardarDatosLS (datos){
   localStorage.setItem("datos", JSON.stringify(datos));
   console.log ("Datos guardados en Local Storage!");
 }
 function cargarDatosLS (){
    return JSON.parse(localStorage.getItem("datosContacto"))
 }
 miFormulario.addEventListener ("submit", datosGuardados);

 btnMostrar.addEventListener('click', () => {
   
    Swal.fire({
        title: 'Está seguro de  que es el mail?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, seguro',
        cancelButtonText: 'No, no quiero'
    }).then((result) => {
 
        if (result.isConfirmed) {
            Swal.fire({
                title: 'Guardado!',
                icon: 'success',
                text: 'El archivo ha sido guardado'
            })
        }
    })
})

 


 


