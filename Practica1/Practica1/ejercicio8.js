
function ejecutarDespues2Segundos(callback) {
    setTimeout(callback, 2000); 
}

ejecutarDespues2Segundos(() => {
    console.log("¡Han pasado 2 segundos!");
});
