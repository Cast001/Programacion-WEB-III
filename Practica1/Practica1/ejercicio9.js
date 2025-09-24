
function mensajeExito() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("¡Operación exitosa después de 3 segundos!");
        }, 3000); 
    });
}
mensajeExito()
    .then((mensaje) => {
        console.log(mensaje); 
    })
    .catch((error) => {
        console.log("Ocurrió un error:", error);
    });
