function esPalindromo(cadena) {
    cadena = cadena.toLowerCase();
    let cadenaInvertida = cadena.split('').reverse().join('');
    return cadena === cadenaInvertida;
}

console.log(esPalindromo("oruro")); 
console.log(esPalindromo("hola"));  
