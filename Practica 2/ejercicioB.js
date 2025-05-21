const productos = [
    { nombre: "Laptop", precio: 12000 },
    { nombre: "Mouse", precio: 250 },
    { nombre: "Teclado", precio: 750 },
    { nombre: "Monitor", precio: 3000 }
];

//Filtramos a los productos que valen más de 1000
let caro = productos.filter (p => p.precio >= 1000);

//Prueba de que funcione el filtro
console.log(caro);

//Nuevo arreglo con solo el nombre de los productos
const nombres = caro.map (pro => pro.nombre);

//Prueba del map
console.log(nombres);