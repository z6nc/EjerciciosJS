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
