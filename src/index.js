/* introducir todo los elementos del first screen y options, doc and pt */
const contactScreen =document.getElementById("contact-screen");
const instructionScreen =document.getElementById("instructions-screen");
const welcome = document.getElementById("welcome");
const start = document.getElementById("start");
const options = document.getElementById("options");
const doctor = document.getElementById("doctor");
const patient = document.getElementById("patient");
const doctorScreen = document.getElementById("doctor-screen");
const cifer =document.getElementById("cifer");
const results = document.getElementById("results");
const resultsp = document.getElementById("resultsp");
const send = document.getElementById("send");
const patienteScreen = document.getElementById("patienteScreen");
const decifer = document.getElementById("decifer");
const results2 = document.getElementById("results2");
const resultsp2 = document.getElementById("resultsp2");
const home =document.getElementById("back");
const copiar = document.getElementById("copiar");
const homeHeaderBtn =document.getElementById("home-header-btn");
const contactHeaderBtn =document.getElementById("contact-header-btn");
const instructionsHeaderBtn = document.getElementById("instructions-header-btn");

/* solo visualizar la primera pantalla */
contactScreen.style.display="none";
instructionScreen.style.display="none";
options.style.display = "none";
doctorScreen.style.display = "none";
patienteScreen.style.display = "none";
results.style.display ="none";
resultsp.style.display ="none";
results2.style.display="none";
resultsp2.style.display ="none";

homeHeaderBtn.addEventListener("click", ()=>{
    contactScreen.style.display="none";
    instructionScreen.style.display="none";
    options.style.display = "none";
    doctorScreen.style.display = "none";
    patienteScreen.style.display = "none";
    results.style.display ="none";
    resultsp.style.display ="none";
    results2.style.display="none";
    resultsp2.style.display ="none";
    welcome.style.display="block";
})

contactHeaderBtn.addEventListener("click", ()=>{
    contactScreen.style.display="none";
    instructionScreen.style.display="none";
    options.style.display = "none";
    doctorScreen.style.display = "none";
    patienteScreen.style.display = "none";
    results.style.display ="none";
    resultsp.style.display ="none";
    results2.style.display="none";
    resultsp2.style.display ="none";
    welcome.style.display="none"
    contactScreen.style.display="block";
})

instructionsHeaderBtn.addEventListener("click", ()=>{
    contactScreen.style.display="none";
    instructionScreen.style.display="none";
    options.style.display = "none";
    doctorScreen.style.display = "none";
    patienteScreen.style.display = "none";
    results.style.display ="none";
    resultsp.style.display ="none";
    results2.style.display="none";
    resultsp2.style.display ="none";
    welcome.style.display="none"
    instructionScreen.style.display="block";
})
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

    /*alert("El resultado se ha cifrado");*/

     /* toma el valor del input y el offset*/
     const message = document.getElementById("message").value;
     const offset = document.getElementById("offset").value;

     let offsetn = parseInt(offset, 10);

     /*llamar la función encode y mostrarlo en la pantalla*/
     document.getElementById("resultsp").innerHTML="El resultado cifrado es: " ;
     document.getElementById("functionCall").innerHTML= cipher.encode(message, offsetn);
         
      
  
})
copiar.addEventListener("click", function() {
    let copy = document.getElementById('copytext')
    let range = document.createRange(),
    selection = window.getSelection();
    selection.removeAllRanges();
    range.selectNodeContents(copy);
    selection.addRange(range);
    document.execCommand('copy');
    selection.removeAllRanges();
}, false);

/*button enviar*/
send.addEventListener("click", () =>{
results.style.display="none";
options.style.display="block";
history.go(0);
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

    /*alert("Tu resultado se ha descifrado");*/

    /*coger los valores del mensaje y el offset*/
    const mCiphered = document.getElementById("mCiphered").value;
    const offset2 = document.getElementById("offset2").value;

    let offset2n = parseInt(offset2, 10);

    /*llamar la función y mostrarlo*/
    document.getElementById("resultsp2").innerHTML = "Tu resultado descifrado es: " ;
    document.getElementById("functionDecifer").innerHTML= cipher.decode(mCiphered, offset2n) ;
})

home.addEventListener("click", () =>{
    results2.style.display="none";
    resultsp2.style.display ="none";
    welcome.style.display="block";
    history.go(0);
})
