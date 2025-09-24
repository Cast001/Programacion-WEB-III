
function obtenerUsuario() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Usuario obtenido");
            resolve({ id: 1, nombre: "Juan" });
        }, 1000);
    });
}

function obtenerPedidos(usuarioId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Pedidos obtenidos para el usuario:", usuarioId);
            resolve(["Pedido 1", "Pedido 2", "Pedido 3"]);
        }, 1000);
    });
}

obtenerUsuario()
    .then((usuario) => {
        return obtenerPedidos(usuario.id);
    })
    .then((pedidos) => {
        console.log("Pedidos:", pedidos);
    })
    .catch((error) => {
        console.log("Ocurrió un error:", error);
    });
