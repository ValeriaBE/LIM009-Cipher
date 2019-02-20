/* introducir todo los elementos del first screen y options, doc and pt */
const welcome = document.getElementById("welcome");
const start = document.getElementById("start");
const options = document.getElementById("options");
const doctor = document.getElementById("doctor");
const patient = document.getElementById("patient");
const doctorScreen = document.getElementById("doctorScreen");
const encode =document.getElementById("encode");
const results = document.getElementById("results");
const patientScreen = document.getElementById("patientScreen");
const decode = document.getElementById("decode");
const results2 = document.getElementById("results2");

/* solo visualizar la primera pantalla */
options.style.display = "none";
doctorScreen.style.display = "none";
patienteScreen.style.display = "none";

/*función al botón empezar*/
start.addEventListener("click", () =>{
    welcome.style.display="none";
    start.style.display="none";
    options.style.display = "block";
})

/*función al botón doctor*/
doctor.addEventListener("click", () =>{
    options.style.display="none";
    doctorScreen.style.display="block";
})

/*función al botón cifrar*/
encode.addEventListener("click", () =>{
    doctorScreen.style.display="none";
    document.getElementById("results").innerHTML="Tu mensaje cifrado es: " ;
})

/*función al botón paciente*/
patient.addEventListener("click", () =>{
    options.style.display="none";
    patienteScreen.style.display="block";
})

/*función al botón descifrar*/
decode.addEventListener("click", () =>{
    patienteScreen.style.display="none";
    document.getElementById("results2").innerHTML="Tu mensaje descifrado es: " ;
})