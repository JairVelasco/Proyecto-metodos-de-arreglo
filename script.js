// Arreglo de productos
const productos = [
    { nombre: "Mouse", precio: 50, categoria: "Electrónicos" },
    { nombre: "Teclado", precio: 150, categoria: "Electrónicos" },
    { nombre: "Monitor", precio: 2000, categoria: "Electrónicos" },
    { nombre: "USB", precio: 80, categoria: "Accesorios" },
    { nombre: "Audífonos", precio: 90, categoria: "Accesorios" }
];

// Filtrar productos con precio menor a 100
const productosFiltrados = productos.filter(producto => producto.precio < 100);
console.log("Productos filtrados (menos de $100):", productosFiltrados);

// Ordenar los productos filtrados alfabéticamente por nombre
const productosOrdenados = productosFiltrados.sort((a, b) => a.nombre.localeCompare(b.nombre));
console.log("Productos ordenados alfabéticamente:", productosOrdenados);

// Obtener solo los nombres de los productos
const nombresProductos = productosOrdenados.map(producto => producto.nombre);
console.log("Nombres de los productos:", nombresProductos);

// (Opcional) Usando reduce para obtener el total de precios de los productos filtrados
const totalPrecios = productosFiltrados.reduce((total, producto) => total + producto.precio, 0);
console.log("Suma total de los productos filtrados:", totalPrecios);

// (Opcional) Usando some para verificar si hay algún producto de la categoría "Electrónicos"
const hayElectronicos = productos.some(producto => producto.categoria === "Electrónicos");
console.log("¿Hay productos electrónicos en la lista?:", hayElectronicos);

// (Opcional) Usando every para verificar si todos los productos cuestan menos de 500
const todosBaratos = productos.every(producto => producto.precio < 500);
console.log("¿Todos los productos cuestan menos de $500?:", todosBaratos);

// (Opcional) Usando includes para verificar si hay un producto llamado "Mouse" en la lista de nombres
const incluyeMouse = nombresProductos.includes("Mouse");
console.log("¿La lista de nombres incluye 'Mouse'?:", incluyeMouse);
