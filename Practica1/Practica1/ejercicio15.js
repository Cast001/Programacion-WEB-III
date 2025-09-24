function obtenerDatosCallback(callback) {
    setTimeout(() => {
        const datos = "Datos recibidos";
        callback(null, datos); 
    }, 1000);
}

// Convertir el callback en promesa
obtenerDatosCallback((error, resultado) => {
    if (error) {
        console.log("Ocurrió un error:", error);
    } else {
        console.log(resultado);
    }
});

function obtenerDatosPromesa() {
    return new Promise((resolve, reject) => {
        obtenerDatosCallback((error, resultado) => {
            if (error) {
                reject(error);
            } else {
                resolve(resultado);
            }
        });
    });
}


obtenerDatosPromesa()
    .then((resultado) => console.log("Resultado usando promesa:", resultado))
    .catch((error) => console.log("Ocurrió un error:", error));
