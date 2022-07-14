class Productos {
  constructor(id, nombre, precio, descuento) {
    this.id = id;
    this.nombre = nombre;
    this.precio = precio;
    this.descuento = descuento;
  }

  aplicoDescuento() {
    return (this.precio -= this.precio * 0.1);
  }
}

const producto = [];

producto.push(new Productos(1, "Cuarzo Rosa", 650, true));
producto.push(new Productos(2, "Amatista", 680, false));
producto.push(new Productos(3, "Cuarzo Cristal", 630, false));
producto.push(new Productos(4, "Combo sahumo + piedra + palo santo", 1050, true));
producto.push(new Productos(5, "Vela Drama", 580, true));
producto.push(new Productos(6, "Vela Rose", 590, false));
producto.push(new Productos(7, "Vela Awesome", 560, false));




// mostrar productos comprados
function mostrarProductos() {
  for (let i = 0; i < carrito.length; i++) {
    console.log(carrito[i]);
  }
}


// calcular el total
function calcularTotal() {
  for (let i = 0; i < carrito.length; i++) {
    let total = 0;
    for (let j = 0; j < carrito.length; j++) {
      total += carrito[j][0].precio;
    }
    console.log(`El total de la compra es: $${total}`);
  }
}


//buscar productos

function buscarProducto(producto) {
    
  let ingresoProductos = prompt(
  `Ingrese el producto que desea buscar`)

  let productoBuscado = producto.find(producto => producto.nombre == ingresoProductos)
 

  if(productoBuscado === undefined) {
     alert(`Lo sentimos, no pudimos encontrar el producto`)
  }
  else {
      console.log(productoBuscado)
  }
  
}

function buscarPrecio(producto) {

  let ingresoPrecio = parseInt(prompt(`Ingrese un precio maximo`))
  let precioBuscado = producto.some(producto => producto.precio <= ingresoPrecio)

  if(precioBuscado) {
      console.log(producto.filter(producto => producto.precio <= ingresoPrecio))
  }
  else {
      alert(`No se encontraron productos esas caracteristicas`);
  }
}



let productos, cantidad, consulta, busqueda


// ingresar productos al carrito
const carrito = [];

cantidad = parseInt(prompt(`Cuantos productos desea?`))

for (let i = 0; i < cantidad; i++) {
  productos = parseInt(
    prompt(`Que producto/s desea? Escriba el numero correspondiente:
    1. Cuarzo Rosa
    2. Amatista
    3. Cuarzo Cristal
    4. Combo sahumo + piedra + palo santo 
    5. Vela Drama 
    6. Vela Rose
    7. Vela Awesome`)
  );


  // aplicar descuento
  switch (productos) {
    case 1:
      producto[0].aplicoDescuento()
      break;
    case 4:
      producto[3].aplicoDescuento()
      break;
    case 5:
      producto[4].aplicoDescuento()
        break;
  
    default:
      break;
  }
 

  const productoDeseado = producto.filter((producto) => producto.id === productos);
  carrito.push(productoDeseado);
}

mostrarProductos()
calcularTotal()


// simulador de busqueda

consulta = prompt(`Desea buscar productos?`)
if (consulta == `si`) {
    
    busqueda = parseInt(prompt(
    `Escriba el numero correspondiente:
    1. Buscar por producto
    2. Buscar por precio`))
    switch (busqueda) {
        case 1:
            buscarProducto(producto)
            break;
        case 2:
            buscarPrecio(producto)
            break;
        default:
            alert(`Opcion no valida`)
            break;
    }
} else if(consulta == `no`) {
    alert(`Hasta luego!`);
}
