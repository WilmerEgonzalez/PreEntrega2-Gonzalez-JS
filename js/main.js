class Producto {
    constructor(nombre, precio, proveedor) {
        this.nombre = nombre;
        this.precio = precio;
        this.proveedor = proveedor;
    }
}

const juego = {
    id: 1,
    nombre: 'Resident Evil 2 Remake Standard Edition Capcom PS4 Físico',
    precio: 35500,
    proveedor: 'Capcom'
};

const consola = {
    id: 2,
    nombre: 'Consola Playstation Ps4 1tb',
    precio: 76260,
    proveedor: 'Sony'
};

const accesorio = {
    id: 3,
    nombre: 'Combo Soportes Pared Ps4 + Joysticks +organizador +auricular',
    precio: 6600,
    proveedor: 'Sawfish Gaming'
};

const componente = {
    id: 4,
    nombre: 'Placa de video Nvidia Gigabyte GeForce 10 Series GT 1030',
    precio: 51700,
    proveedor: 'Nvidia'
};

let nombre;

do {
    nombre = prompt('Bienvenido a SawFish Gaming, ¿Cuál es tu nombre?');
} while (!nombre);

alert('Bienvenido ' + nombre);

const listaProductos = [];

let respuesta = 0;

while (respuesta !== 4) {
    respuesta = Number(prompt("Elige la opción que deseas realizar: 1-Agregar producto // 2-Mostrar productos // 3-Sumar // 4-Salir"));

    switch (respuesta) {
        case 1:
            agregar();
            break;
        case 2:
            mostrar();
            break;
        case 3:
            sumar();
            break;
        case 4:
            alert("Saliendo del programa. ¡Hasta luego!");
            break;
        default:
            alert("Opción no válida. Introduce un número válido.");
    }
}

function agregar() {
    let opcion = Number(prompt("Ingrese el número del producto que deseas agregar al carrito:\n\n1. " + juego.nombre + '\n2. ' + consola.nombre + '\n3. ' + accesorio.nombre + '\n4. ' + componente.nombre));

    if (opcion >= 1 && opcion <= 4) {
        let productoElegido;
        switch (opcion) {
            case 1:
                productoElegido = juego;
                break;
            case 2:
                productoElegido = consola;
                break;
            case 3:
                productoElegido = accesorio;
                break;
            case 4:
                productoElegido = componente;
                break;
        }

        let precio = productoElegido.precio;
        let proveedor = productoElegido.proveedor;

        const producto = new Producto(productoElegido.nombre, precio, proveedor);
        listaProductos.push(producto);

        alert("Producto agregado con éxito.");
    } else {
        alert("Por favor, selecciona una opción válida");
    }
}

function mostrar() {
    let mensaje = "Lista de productos:\n";
    for (let i = 0; i < listaProductos.length; i++) {
        mensaje += `Producto: ${listaProductos[i].nombre}, Precio: $${listaProductos[i].precio}, Proveedor: ${listaProductos[i].proveedor}\n`;
    }
    alert(mensaje);
}

function sumar() {
    let sumatoria = 0;
    let mensaje = "Lista de productos:\n";
    for (let i = 0; i < listaProductos.length; i++) {
        mensaje += `Producto: ${listaProductos[i].nombre}, Precio: $${listaProductos[i].precio}\n`;
        sumatoria += listaProductos[i].precio;
    }
    mensaje += `\nTotal: $${sumatoria}`;
    alert(mensaje);
}
