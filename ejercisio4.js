//Crear una función sumaArreglo() que tome como parámetro un arreglo de números, retornar la suma de todos los números del arreglo.

function sumaArreglo(arreglo) {
    
    let suma = 0;

    for ( i = 0; i < arreglo.length; i++) {
      suma += arreglo[i];
    }
  
    return suma;
}
let arreglo = [15, 23, 35, 44, 65];
let resultado = sumaArreglo(arreglo);

console.log(resultado); 