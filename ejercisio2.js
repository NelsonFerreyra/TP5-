

function esVocal(caracter) {
    let vocales = "A,E,I,O,U";
    for ( i = 0; i < vocales.length; i++) {
      if (caracter === vocales[i]) {
        return true;
      }
    }
    return false ;
}

console.log(esVocal("A"));  
console.log(esVocal("E"));  
console.log(esVocal("S"));  