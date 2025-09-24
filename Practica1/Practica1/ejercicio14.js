function obtenerDatos() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Datos recibidos");
        }, 1000);
    });
}

// Uso de promesa callback
obtenerDatos().then((resultado) => {
    console.log(resultado);
});

function obtenerDatosConCallback(callback) {
    obtenerDatos()
        .then((resultado) => callback(null, resultado))  // Primer argumento null = sin error
        .catch((error) => callback(error));
}


obtenerDatosConCallback((error, resultado) => {
    if (error) {
        console.log("Ocurrió un error:", error);
    } else {
        console.log("Resultado usando callback:", resultado);
    }
});
