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
      let c = message.charCodeAt(i);
      if(c >= 65 && c <=  90) {
        result += String.fromCharCode((c - 65 + shift) % 26 + 65);
      }
  }
  console.log(result);
  },
  decode: () => {
    /* Acá va tu código */
    const mCiphered = document.getElementById("mCiphered").value;
    const offset2 = document.getElementById("offset2").value;
  }
};
