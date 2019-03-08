describe('cipher', () => {

  it('debería ser un objeto', () => {
    assert.equal(typeof cipher, 'object');
  });

  describe('cipher.encode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.encode, 'function');
    });

    it('debería retornar "HIJKLMNOPQRSTUVWXYZABCDEFG" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 33', ()=>{
      assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 33), 'HIJKLMNOPQRSTUVWXYZABCDEFG');
    });
    it('debería retornar "EFGHIJKLMNOPQRSTUVWXYZABCD" para "ABCDEFGHIJKLMNOPQRSTUVWXYZ" con offset 30', ()=>{
      assert.equal(cipher.encode('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 30), 'EFGHIJKLMNOPQRSTUVWXYZABCD');
    });

    it('debería retornar "efghijklmnopqrstuvwxyzabcd" para "abcdefghijklmnopqrstuvwxyz" con offset 30', ()=>{
      assert.equal(cipher.encode("abcdefghijklmnopqrstuvwxyz", 30), "efghijklmnopqrstuvwxyzabcd");
    });
    it('debería retornar "hijklmnopqrstuvwxyzabcdefg" para "abcdefghijklmnopqrstuvwxyz" con offset 33', ()=>{
      assert.equal(cipher.encode("abcdefghijklmnopqrstuvwxyz", 33), "hijklmnopqrstuvwxyzabcdefg");
    });

    it('debería retornar " !#$%&()*+,-./0123456789:;<=>?@" para " !#$%&()*+,-./0123456789:;<=>?@" con offset 33', ()=>{
      assert.equal(cipher.encode(" !#$%&()*+,-./0123456789:;<=>?@", 33), " !#$%&()*+,-./0123456789:;<=>?@");
    });
    it('debería retornar " !#$%&()*+,-./0123456789:;<=>?@" para " !#$%&()*+,-./0123456789:;<=>?@" con offset -33', ()=>{
      assert.equal(cipher.encode(" !#$%&()*+,-./0123456789:;<=>?@", -33), " !#$%&()*+,-./0123456789:;<=>?@");
    });
    it('debería retornar "¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûü" para "¿¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûü" con offset 33', () =>{
      assert.equal(cipher.encode("¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûü",33),"¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûü");
    });
    it('debería retornar "¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûü" para "¿¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûü" con offset -33', () =>{
      assert.equal(cipher.encode("¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûü",-33),"¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûü");
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset -33', ()=>{
      assert.equal(cipher.encode('HIJKLMNOPQRSTUVWXYZABCDEFG', -33), 'ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    });
    it('debería retornar "GNKZ" para "HOLA" con offset -1', ()=>{
      assert.equal(cipher.encode('HOLA', -1), 'GNKZ');
    });
    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg" con offset -33', ()=>{
      assert.equal(cipher.encode('hijklmnopqrstuvwxyzabcdefg', -33), 'abcdefghijklmnopqrstuvwxyz');
    });
    it('debería retornar "gnkz" para "hola" con offset -1', ()=>{
      assert.equal(cipher.encode('hola', -1), 'gnkz');
    });
  });

  describe('cipher.decode', () => {

    it('debería ser una función', () => {
      assert.equal(typeof cipher.decode, 'function');
    });

    it('debería retornar "ABCDEFGHIJKLMNOPQRSTUVWXYZ" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 33', () =>{
      assert.equal(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', 33),"ABCDEFGHIJKLMNOPQRSTUVWXYZ" );
    });
    it('debería retornar "DEFGHIJKLMNOPQRSTUVWXYZABC" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset 30', () =>{
      assert.equal(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', 30),"DEFGHIJKLMNOPQRSTUVWXYZABC" );
    });

    it('debería retornar "abcdefghijklmnopqrstuvwxyz" para "hijklmnopqrstuvwxyzabcdefg con offset 33', () =>{
      assert.equal(cipher.decode("hijklmnopqrstuvwxyzabcdefg", 33),"abcdefghijklmnopqrstuvwxyz" );
    });
    it('debería retornar "defghijklmnopqrstuvwxyzabc" para "hijklmnopqrstuvwxyzabcdefg con offset 30', () =>{
      assert.equal(cipher.decode("hijklmnopqrstuvwxyzabcdefg", 30),"defghijklmnopqrstuvwxyzabc" );
    });

    it('debería retornar " !#$%&()*+,-./0123456789:;<=>?@" para " !#$%&()*+,-./0123456789:;<=>?@" con offset 33', ()=>{
      assert.equal(cipher.decode(" !#$%&()*+,-./0123456789:;<=>?@", 33), " !#$%&()*+,-./0123456789:;<=>?@");
    });
    it('debería retornar " !#$%&()*+,-./0123456789:;<=>?@" para " !#$%&()*+,-./0123456789:;<=>?@" con offset -33', ()=>{
      assert.equal(cipher.decode(" !#$%&()*+,-./0123456789:;<=>?@", -33), " !#$%&()*+,-./0123456789:;<=>?@");
    });
    it('debería retornar "¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûü" para "¿¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûü" con offset 33', () =>{
      assert.equal(cipher.decode("¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûü",33),"¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûü");
    });
    it('debería retornar "¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûü" para "¿¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûü" con offset -33', () =>{
      assert.equal(cipher.decode("¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûü",-33),"¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜÝÞßàáâãäåæçèéêëìíîïðñòóôõö÷øùúûü");
    });
    it('debería retornar "OPQRSTUVWXYZABCDEFGHIJKLMN" para "HIJKLMNOPQRSTUVWXYZABCDEFG" con offset -33', ()=>{
      assert.equal(cipher.decode('HIJKLMNOPQRSTUVWXYZABCDEFG', -33), 'OPQRSTUVWXYZABCDEFGHIJKLMN');
    });
    it('debería retornar "opqrstuvwxyzabcdefghijklmn" para "hijklmnopqrstuvwxyzabcdefg" con offset -33', ()=>{
      assert.equal(cipher.decode('hijklmnopqrstuvwxyzabcdefg', -33), 'opqrstuvwxyzabcdefghijklmn');
    });
  });

});
