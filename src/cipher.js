window.cipher = {
  encode: (message, offset) => {

    /*convertir el offset en un integer*/
    let offsetn = parseInt(offset, 10);

    /*definir el alphabeto*/
    //const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    /*definir una variable resultado vacío*/
    let resultado = " ";

    /*implementar un for para que recorre todo el texto*/
    for(let i=0; i< message.length; i++){
    let valorAsccideLetra = message.charCodeAt(i);
    /*if(valorAsccideLetra>=65 && valorAsccideLetra<=90){*/
    resultado += String.fromCharCode((valorAsccideLetra - 65 + offsetn) % 26 + 65);
   /* }
    if(valorAsccideLetra>=97 && valorAsccideLetra<=122){
      resultado += String.fromCharCode((valorAsccideLetra - 97 + offsetn) % 26 + 97);
    }*/
    } 
    return (resultado);
  },
  decode: (mCiphered, offset2) => {
    /* convertir el offset2 en un integer */
    let offset2n = parseInt(offset2, 10);

    
    /*Definir la variable resultado descifrado*/
    let resultadoDecode = " ";

    /*implementar un for y definir la formula*/
    for(let j=0; j<mCiphered.length; j++){
      let valor = mCiphered.charCodeAt(j);
      /*if(valor>=65 && valor<=90){*/
      resultadoDecode += String.fromCharCode((valor - offset2n + 65) % 26 + 65);
      /*}
      if(valor>=97 && valor<=122){
        resultadoDecode += String.fromCharCode((valor-offset2n + 33) % 26 +97);
      }*/
    }
  
    return (resultadoDecode);

  }
};
