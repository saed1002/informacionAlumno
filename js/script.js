var forma = document.getElementById("forma"),
    boleta = forma["boleta"],
    nombre = forma["nombre"],
    grupo = forma["grupo"],
    materia =forma["materia"],
    fecha = forma["fecha"],
    salida = document.getElementById("salidaInfo");

function procesa(){
 salida.innerHTML=`La boleta del alumno es: ${boleta.value}, 
 El nombre del alumno es: ${nombre.value}, 
 su grupo es ${grupo.value}, 
 Ingreso la meteria ${materia.value}, 
 la fecha que ingreso ${fecha.value}`
}