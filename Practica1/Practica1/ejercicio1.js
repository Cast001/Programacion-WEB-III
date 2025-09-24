function contarVocales(texto) {
    const vocales = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    texto = texto.toLowerCase();

   
    for (let letra of texto) {
        if (vocales.hasOwnProperty(letra)) {
            vocales[letra]++; 
        }
    }

    return vocales;
}

let obj = contarVocales("euforia");
console.log(obj); 
