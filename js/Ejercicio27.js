/*

Escribir una función llamada numerosAPalabras que reciba un arreglo de números
(cada número en el rango de 0 a 0) y retorne un nuevo
arreglo convirtiendo cada número a su versión en palabras.

*/

//Primera forma
function numerosAPalabras(arrayNumeros){
    let arrayPalabras = [];
    const map ={
        '0': 'cero',
        '1': 'uno',
        '2': 'dos',
        '3': 'tres',
        '4': 'cuatro',
        '5': 'cinco',
        '6': 'seis',
        '7': 'siete',
        '8': 'ocho',
        '9': 'nueve',
    }
   
    for(let i = 0 ; i<arrayNumeros.length ; i++){
        arrayPalabras.push(map[arrayNumeros[i]])
    }
    return arrayPalabras
}

// código de prueba
console.log(numerosAPalabras([0, 1, 2, 3, 4])) // ["cero", "uno", "dos", "tres", "cuatro"]
console.log(numerosAPalabras([5, 6, 7, 8, 9])) // ["cinco", "seis", "siete", "ocho", "nueve"]
