//Crea una función llamada numeroMayor() que toma tres números como entrada y retornar el numero mayor de ellos, si son iguales devolver un String «son iguales».

function numeroMayor(num1, num2, num3) {
    if (num1 === num2 && num2 === num3) {
      return "son iguales";
    }
    let mayor = num1;
    if (num2 > mayor) {
      mayor = num2;
    }
    if (num3 > mayor) {
      mayor = num3;
    }
}
  
  let Resultado = numeroMayor(10, 5, 8);
    console.log(resultado); 

  let esultado = numeroMayor(3, 3, 3);
  console.log(resultado);

  let resultado = numeroMayor(0, -1, 2);
  console.log(resultado); 
  
  
  
  
  
  