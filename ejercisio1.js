 //Dados 2 arrays ["Juan", "Dani"] y ["Leo", "Monica", "Juliana"], escribir una función que concatene "unifique" los dos array y devuelva un solo array ["Juan", "Dani", "Leo", "Monica", "Juliana"].
// Puedes crear un tercer array vacío e ir poniendo los elementos en dicho array.

let array1 = ["Juan", "Dani"];
let array2 = ["Leo", "Monica", "Juliana"];

function CONCATENAR(array1, array2) {
    let arrayUnificado = [];
  
    for ( i = 0; i < array1.length; i++) {
      arrayUnificado.push(array1[i]); 
    }
  
    for ( j = 0; j < array2.length; j++) {
      arrayUnificado.push(array2[j]); 
    }
  
    return arrayUnificado; 
  }

  let resultado = CONCATENAR(array1,array2) ;

  console.log(resultado) 