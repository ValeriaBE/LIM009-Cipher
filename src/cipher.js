window.cipher = {
  encode: (message, offset) => {

    /*convertir el offset en un integer*/
    let offsetn = parseInt(offset, 10);

    /*definir el alphabeto*/
    const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    /*definir una variable resultado vacío*/
    let resultado = " ";

    /*implementar un for para que recorre todo el texto*/
    for(let i=0; i< message.length; i++){
    let valorAsccideLetra = message.charCodeAt(i);
    resultado += String.fromCharCode((valorAsccideLetra - 65 + offsetn) % 26 + 65);
    } 
    return (resultado);
  },
  decode: (mCiphered, offset2) => {
    /* convertir el offset2 en un integer */
    //let offset2 = parseInt(offset2, 10);

    
    /*Definir la variable resultado descifrado*/
    let resultadoDecode = " ";

    /*implementar un for y definir la formula*/
    for(let j=0; j<mCiphered.length; j++){
      let valor = mCiphered.charCodeAt(j);
      resultadoDecode += String.fromCharCode((valor - offset2) % 26);
    }
  
    return resultadoDecode;

  }
};
