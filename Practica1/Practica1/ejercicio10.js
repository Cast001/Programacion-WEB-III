// Ejemplo de Callback
function saludar(nombre, callback) {
    console.log("Hola " + nombre);
    callback();
}

saludar("Juan", () => {
    console.log("Esto se ejecuta después de saludar");
});
// Ejemplo de Promise
function tareaAsincrona() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("¡Tarea completada!");
        }, 2000);
    });
}

tareaAsincrona()
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));
