const productos = [
  { descripcion: "Auriculares", precio: 49000 },
  { descripcion: "Mouse", precio: 15000 },
  { descripcion: "Teclado", precio: 30000 },
  { descripcion: "Monitor", precio: 120000 },
  { descripcion: "Webcam", precio: 20000 },
];

// Punto 1
console.log("\nPUNTO 1:");
console.log("Listado de productos:");
productos.forEach((producto) => {
  console.log(
    `Producto: ${producto.descripcion} - Precio: $${producto.precio}`
  );
});

console.log(`
    ***************
    Punto 3:
    Productos con precios aumentados en un 21%`);
const productosPreciosConIva = productos.map((p) => ({
  ...p,
  precio: p.precio * 1.21,
}));
console.log(`***************`);

// Punto 6
console.log("\nPUNTO 6:");
let precioMinimo = Math.min(...productos.map((p) => p.precio));
let indexMenorPrecio = productos.findIndex((p) => p.precio === precioMinimo);

if (indexMenorPrecio !== -1) {
  productos.splice(indexMenorPrecio, 1);
}

console.log("\nArray después de eliminar el producto más barato:");
productos.forEach((producto) => {
  console.log(
    `Producto: ${producto.descripcion} - Precio: $${producto.precio}`
  );
});


//Punto 4
console.log("\nPUNTO 4:");
const productosOrdenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log("Productos ordenados por precio:");
productosOrdenados.forEach((producto) => {
  console.log(
    `Producto: ${producto.descripcion} - Precio: $${producto.precio}`
  );
});