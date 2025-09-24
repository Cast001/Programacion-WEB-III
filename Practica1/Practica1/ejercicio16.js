function obtenerUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ id: 1, nombre: "Juan" });
        }, 1000);
    });
}

function obtenerPedidos(usuarioId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(["Pedido 1", "Pedido 2"]);
        }, 1000);
    });
}


obtenerUsuario()
    .then((usuario) => obtenerPedidos(usuario.id))
    .then((pedidos) => console.log("Pedidos:", pedidos))
    .catch((error) => console.log("Ocurrió un error:", error));

    
//funcion migrada a async/await
async function mostrarPedidos() {
    try {
        const usuario = await obtenerUsuario();       
        const pedidos = await obtenerPedidos(usuario.id); 
        console.log("Pedidos:", pedidos);
    } catch (error) {
        console.log("Ocurrió un error:", error);
    }
}
mostrarPedidos();
