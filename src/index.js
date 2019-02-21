/* introducir todo los elementos del first screen y options, doc and pt */
const welcome = document.getElementById("welcome");
const start = document.getElementById("start");
const options = document.getElementById("options");
const doctor = document.getElementById("doctor");
const patient = document.getElementById("patient");
const doctorScreen = document.getElementById("doctorScreen");
const cifer =document.getElementById("cifer");
const results = document.getElementById("results");
const resultsp = document.getElementById("resultsp");
const send = document.getElementById("send");
const patientScreen = document.getElementById("patientScreen");
const decifer = document.getElementById("decifer");
const results2 = document.getElementById("results2");
const resultsp2 = document.getElementById("resultsp2");



/* solo visualizar la primera pantalla */
options.style.display = "none";
doctorScreen.style.display = "none";
patienteScreen.style.display = "none";
results.style.display ="none";
resultsp.style.display ="none";
results2.style.display="none";
resultsp2.style.display ="none";

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
cifer.addEventListener("click", () =>{
    doctorScreen.style.display="none";
    results.style.display="block";
    resultsp.style.display ="block";

     /* toma el valor del input y el offset*/
     const message = document.getElementById("message").value;
     const offset = document.getElementById("offset").value;
     cipher.encode(message, offset)
         
      
  
})

/*button enviar*/
send.addEventListener("click", () =>{

})

/*función al botón paciente*/
patient.addEventListener("click", () =>{
    options.style.display="none";
    patienteScreen.style.display="block";
})

/*función al botón descifrar*/
decifer.addEventListener("click", () =>{
    patienteScreen.style.display="none";
    results2.style.display="block";
    resultsp2.style.display ="block";
    document.getElementById("resultsp2").innerHTML ;
})