/* introducir todo los elementos del first screen y options, doc and pt */
const welcome = document.getElementById("welcome");
const start = document.getElementById("start");
const options = document.getElementById("options");
const doctor = document.getElementById("doctor");
const patient = document.getElementById("patient");
const doctorScreen = document.getElementById("doctorScreen");
const encode =document.getElementById("encode");
const results = document.getElementById("results");
const resultsp = document.getElementById("resultsp");
const patientScreen = document.getElementById("patientScreen");
const decode = document.getElementById("decode");
const results2 = document.getElementById("results2");
const resultsp2 = document.getElementById("resultsp2");

/* solo visualizar la primera pantalla */
options.style.display = "none";
doctorScreen.style.display = "none";
patienteScreen.style.display = "none";
results.style.display ="none";
results2.style.display="none";

/*función al botón empezar*/
start.addEventListener("click", () =>{
    welcome.style.display="none";
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
    results.style.display="block";
    document.getElementById("resultsp").innerHTML;
})

/*función al botón paciente*/
patient.addEventListener("click", () =>{
    options.style.display="none";
    patienteScreen.style.display="block";
})

/*función al botón descifrar*/
decode.addEventListener("click", () =>{
    patienteScreen.style.display="none";
    results2.style.display="block";
    document.getElementById("resultsp2").innerHTML ;
})