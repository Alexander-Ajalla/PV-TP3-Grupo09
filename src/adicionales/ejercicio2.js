const productos=[
{
    descripcion:"keyboard",
    precio:12
},
{
    descripcion:"mouse",
    precio:5
},
{
    descripcion:"laptop",
    precio:120
},
{
    descripcion:"powerbank",
    precio:3
},
{
    descripcion:"headset",
    precio:6
}
];

const productosFiltrados = productos.filter(p=>p.precio < 20);

productosFiltrados.forEach(p=> console.log(p.descripcion));