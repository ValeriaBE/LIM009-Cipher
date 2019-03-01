window.cipher = {
  encode: (message, offsetn) => {

    /*definir una variable resultado vacío*/
    let resultado = "";

    /*implementar un for para que recorre todo el texto*/
    for(let i=0; i< message.length; i++){
      let valorAsccideLetra = message.charCodeAt(i);
    if(offsetn>=0){
    if(valorAsccideLetra>=65 && valorAsccideLetra<=90){
    resultado += String.fromCharCode((valorAsccideLetra - 65 + offsetn) % 26 + 65);
    }
     if(valorAsccideLetra>=97 && valorAsccideLetra<=122){
      resultado += String.fromCharCode((valorAsccideLetra - 97 + offsetn) % 26 + 97);
    }
    if(valorAsccideLetra>=32 && valorAsccideLetra<65){
      resultado+= String.fromCharCode(valorAsccideLetra);
    }
    if(valorAsccideLetra>=191&& valorAsccideLetra<=252){
      resultado+= String.fromCharCode(valorAsccideLetra);
    }
    }else{

    if(valorAsccideLetra>=65 && valorAsccideLetra<=90 && offsetn<0){
      if((valorAsccideLetra - 65 +offsetn) % 26>0){
      resultado += String.fromCharCode(((valorAsccideLetra + 65 +offsetn) % 26)+ 65);
      }
      if((valorAsccideLetra - 65 +offsetn) % 26<0){
        resultado += String.fromCharCode((((valorAsccideLetra - 65 +offsetn) % 26)+26) + 65);
        }
       if((valorAsccideLetra + 65 +offsetn) % 26==0){
          resultado += String.fromCharCode(((valorAsccideLetra + 65 +offsetn) % 26) + 65);
          }
    } 
    if(valorAsccideLetra>=97 && valorAsccideLetra<=122 && offsetn<0){
      if((valorAsccideLetra - 97 +offsetn) % 26>0){
      resultado += String.fromCharCode(((valorAsccideLetra - 97 +offsetn) % 26)+ 97);
      }
      if((valorAsccideLetra - 97 +offsetn) % 26<0){
        resultado += String.fromCharCode((((valorAsccideLetra - 97 +offsetn) % 26)+26)+97);
        }
       if((valorAsccideLetra - 97 +offsetn) % 26==0){
          resultado += String.fromCharCode(((valorAsccideLetra -97 +offsetn) % 26) + 97);
          }
    } 
    
    if(valorAsccideLetra>=191 && valorAsccideLetra<=252 && offsetn<0){
      resultado+=String.fromCharCode(valorAsccideLetra);
    }
  }
}
    return (resultado);
  },
  decode: (mCiphered, offset2n) => {
    
    /*Definir la variable resultado descifrado*/
    let resultadoDecode = "";

    /*implementar un for y definir la formula*/
    for(let j=0; j<mCiphered.length; j++){
      let valor = mCiphered.charCodeAt(j);
    if(offset2n>=0){
      if(valor>=65 && valor<=90){
      resultadoDecode += String.fromCharCode((valor - offset2n + 65) % 26 + 65);
      }
      if(valor>=97 && valor<=122){
        resultadoDecode += String.fromCharCode((valor-offset2n + 33) % 26 +97);
      }
      if(valor>=32 &&  valor<65){
        resultadoDecode+= String.fromCharCode(valor);
      }
      if(valor>=191 && valor<=252){
        resultadoDecode+= String.fromCharCode(valor);
      }
    }else{

        if(valor>=65 && valor<=90 && offset2n<0){
          if((valor - offset2n+65) % 26>0){
          resultadoDecode += String.fromCharCode(((valor - offset2n +65) % 26)+ 65);
          } 
        if((valor - offset2n+65) % 26==0){
          resultadoDecode += String.fromCharCode(((valor -offset2n +65) % 26) + 65);
          } 
        }
        if(valor>=97 && valor<=122 && offset2n<0){
          if((valor - offset2n +33) % 26>0){
          resultadoDecode += String.fromCharCode(((valor - offset2n +33) % 26)+ 97);
          }
           if((valor - offset2n+33) % 26==0){
              resultadoDecode += String.fromCharCode(((valor -offset2n+33) % 26) + 97);
              }
        } 
        
        if(valor>=191 && valor<=252 && offset2n<0){
          resultadoDecode+=String.fromCharCode(valor);
        }
    
      }

    }
    return (resultadoDecode);
  }
};
