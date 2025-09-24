function registrarUsuario(nombre) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Usuario registrado:", nombre);
            resolve(nombre);
        }, 1000);
    });
}

function enviarCorreo(usuario) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Correo enviado a:", usuario);
            resolve(usuario);
        }, 1000);
    });
}

function guardarHistorial(usuario) {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Historial guardado para:", usuario);
            resolve();
        }, 1000);
    });
}

async function procesoCompleto() {
    try {
        const usuario = await registrarUsuario("Juan");
        await enviarCorreo(usuario);
        await guardarHistorial(usuario);
        console.log("Proceso completo");
    } catch (error) {
        console.log("Ocurrió un error:", error);
    }
}

procesoCompleto();
