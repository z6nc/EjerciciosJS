/*
Descripción:
Estás construyendo un sistema de inventario de productos. Deberás implementar varias funciones para manejar la lista de productos y calcular el valor total del inventario.

Requerimientos:
Crea una lista de productos. Cada producto es un objeto con las siguientes propiedades:

id: Un identificador único para cada producto.
name: El nombre del producto.
price: El precio del producto (número decimal).
quantity: La cantidad de productos en stock (entero).
Funciones a implementar:

addProduct(products, name, price, quantity): Agrega un nuevo producto a la lista products. El id debe ser único y generado automáticamente.
removeProduct(products, id): Elimina un producto de la lista según su id.
updateQuantity(products, id, newQuantity): Actualiza la cantidad de un producto según su id.
getTotalInventoryValue(products): Calcula el valor total del inventario (suma de price * quantity para todos los productos).
getProductByName(products, name): Retorna el producto que coincida con el name.


*/


let products=[];

function addProduct(products, name, price, quantity){
    const NewProducto ={
        id : products.length + 1 ,
        name :name,
        price:price,
        quantity:quantity,
    }
    products.push(NewProducto)
    
}
addProduct(products, 'Laptop', 1200.50, 5);
addProduct(products, 'Smartphone', 800.00, 10);
addProduct(products, 'Tablet', 400.25, 7);

// console.log(products);


function removeProduct(products, id){
const index =  products.findIndex(products => products.id === id);
if(index !== -1){
    console.log(`producto  ${id} eliminado .`);
    products.splice(index,1) 
} else {
    console.log(`producto con id ${id} no encontrada.`);
}
return products 

}
// removeProduct(products, 2);
// console.log(products);

function updateQuantity(products, id, newQuantity){
    const producto = products.find(producto => producto.id === id); 
    if(producto){
        producto.quantity = newQuantity ;
    } else {
        console.log(`producto con id ${id} no encontrada.`);
    }
    
      return  producto
}

//  updateQuantity(products, 3, 15);
// console.log(products);

function getTotalInventoryValue(products) {
    let sumaInvetory = 0 ;
    for(let i= 0 ; i< products.length ; i++){
        sumaInvetory += products[i].price * products[i].quantity
    }
    return sumaInvetory
}

// console.log(getTotalInventoryValue(products));

function getProductByName(products, name){
    const ProductoG = products.filter(ProductoG =>ProductoG.name === name )
    if(ProductoG){
         return ProductoG
    } else{
         console.log(`producto con id ${name} no encontrada.`);
    }
    
  
} 
console.log(getProductByName(products, 'Laptop'));
