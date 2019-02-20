/* introducir todo los elementos del first screen y options, doc and pt */
const welcome = document.getElementById("welcome");
const start = document.getElementById("start");
const options = document.getElementById("options");
const doctor = document.getElementById("doctor");
const patient = document.getElementById("patient");
const doctorScreen = document.getElementById("doctorScreen");
const patientScreen = document.getElementById("patientScreen");

/* solo visualizar la primera pantalla */
options.style.display = "none";
doctorScreen.style.display = "none";
patientScreen.style.display = "none";

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

/*función al botón paciente*/
patient.addEventListener("click", () =>{
    options.style.display="none";
    patient.style.display="block";
})