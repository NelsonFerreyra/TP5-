//Crea una función llamada generar_caracteres() que tome como parámetro un número entero (n) y un carácter, retornar el carácter multiplicado por n. Por ejemplo, generar_caracteres(5,x), debería retornar «xxxxx».

function generar_caracteres(n,caracter){

    return caracter.repeat(n) ;
}

let resultado = generar_caracteres (10 ,"/")

console.log(resultado) ;