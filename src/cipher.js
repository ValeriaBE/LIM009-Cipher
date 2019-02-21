window.cipher = {
  encode: (message, offset) => {

    /*convertir el offset en un integer*/
    let offsetn = parseInt(offset, 10);

    /*definir el alphabeto*/
    const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    /*implementar un for para que recorre todo el texto*/
    for(let i=0; i< message.length; i++){
    const valorAsccideLetra = message.charCodeAt();
    const resultado = String.fromCharCode((valorAsccideLetra - 65 + offsetn) % 26 + 65)
    return resultado;
    } 
  },
  decode: () => {
    /* Acá va tu código */
    const mCiphered = document.getElementById("mCiphered").value;
    const offset2 = document.getElementById("offset2").value;
  }
};
