window.cipher = {
  encode: () => {
    /* toma el valor del input y el offset*/
    const message = document.getElementById("message").value;
    const offset = document.getElementById("offset").value;

    /*convertir el offset en un integer*/
    let offnum = parseInt(offset, 10);

    /*definir el alphabeto*/
    const alphabet="ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    /*implementar un for para que recorre todo el texto*/
    for(let i=0; i< message.length; i++){
      let res = message.charCodeAt(i);
      let fin = (res-65+offnum)%26+65;
      cifer += String.fromCharCode(fin);
  }
  return cifer;
  },
  decode: () => {
    /* Acá va tu código */
    const mCiphered = document.getElementById("mCiphered").value;
    const offset2 = document.getElementById("offset2").value;
  }
};
