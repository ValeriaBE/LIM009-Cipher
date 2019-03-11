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
const resultsScreenCifrar = document.getElementById("pantalla-results-cifrar");
const resultsCifrado = document.getElementById("results-cifrado");
const patienteScreen = document.getElementById("patienteScreen");
const decifer = document.getElementById("decifer");
const resultsScreenDescifrar = document.getElementById("results-screen-decode");
const resultsDescifrado = document.getElementById("results-descifrado");
const exitHome =document.getElementById("exit-to-home");
const backHome =document.getElementById("back-to-home");
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
resultsScreenCifrar.style.display ="none";
resultsCifrado.style.display ="none";
resultsScreenDescifrar.style.display="none";
resultsDescifrado.style.display ="none";

homeHeaderBtn.addEventListener("click", ()=>{
    contactScreen.style.display="none";
    instructionScreen.style.display="none";
    options.style.display = "none";
    doctorScreen.style.display = "none";
    patienteScreen.style.display = "none";
    resultsScreenCifrar.style.display ="none";
    resultsCifrado.style.display ="none";
    resultsScreenDescifrar.style.display="none";
    resultsDescifrado.style.display ="none";
    welcome.style.display="block";
})

contactHeaderBtn.addEventListener("click", ()=>{
    contactScreen.style.display="none";
    instructionScreen.style.display="none";
    options.style.display = "none";
    doctorScreen.style.display = "none";
    patienteScreen.style.display = "none";
    resultsScreenCifrar.style.display ="none";
    resultsCifrado.style.display ="none";
    resultsScreenDescifrar.style.display="none";
    resultsDescifrado.style.display ="none";
    welcome.style.display="none"
    contactScreen.style.display="block";
})

instructionsHeaderBtn.addEventListener("click", ()=>{
    contactScreen.style.display="none";
    instructionScreen.style.display="none";
    options.style.display = "none";
    doctorScreen.style.display = "none";
    patienteScreen.style.display = "none";
    resultsScreenCifrar.style.display ="none";
    resultsCifrado.style.display ="none";
    resultsScreenDescifrar.style.display="none";
    resultsDescifrado.style.display ="none";
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
    resultsScreenCifrar.style.display="block";
    resultsCifrado.style.display ="block";

    /*alert("El resultado se ha cifrado");*/

     /* toma el valor del input y el offset*/
     const message = document.getElementById("message").value;
     const offset = document.getElementById("offset").value;

     let offsetn = parseInt(offset, 10);

     /*llamar la función encode y mostrarlo en la pantalla*/
     document.getElementById("results-cifrado").innerHTML="El resultado cifrado es: " ;
     document.getElementById("llamar-función-encode").innerHTML= cipher.encode(message, offsetn);
         
      
  
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
exitHome.addEventListener("click", () =>{
resultsScreenCifrar.style.display="none";
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
    resultsScreenDescifrar.style.display="block";
    resultsDescifrado.style.display ="block";

    /*coger los valores del mensaje y el offset*/
    const mCiphered = document.getElementById("mCiphered").value;
    const offset2 = document.getElementById("offset2").value;

    let offset2n = parseInt(offset2, 10);

    /*llamar la función y mostrarlo*/
    document.getElementById("results-descifrado").innerHTML = "Tu resultado descifrado es: " ;
    document.getElementById("llamar-función-decode").innerHTML= cipher.decode(mCiphered, offset2n) ;
})

backHome.addEventListener("click", () =>{
    resultsScreenDescifrar.style.display="none";
    resultsDescifrado.style.display ="none";
    welcome.style.display="block";
    history.go(0);
})
