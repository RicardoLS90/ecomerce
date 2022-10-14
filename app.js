/*-----------------------elements-----------------------*/

const items= [
{
  id: 1,
  name: 'Hulk',
  price: 25.00,
  image: './assetes/hulk1.png',
  category: 'hulk',
  quantity: 5
},
{
  id: 2,
  name: 'wolverine',
  price: 25.00,
  image: './assetes/wolverine.jpg',
  category: 'wolverine',
  quantity: 3
},
{
  id: 3,
  name: 'ironman',
  price: 25.00,
  image: './assetes/ironman.jpg',
  category: 'ironman',
  quantity: 8
},

{
  id: 4,
  name: 'spiderman',
  price: 25.00,
  image: './assetes/spiderman.png',
  category: 'spiderman',
  quantity: 8
}
]




/* ---------------shop cart---------------*/

const shopCart= document.querySelector('.nav_shop')
const CartContainer= document.querySelector('.show-cart')
const closeButton= document.querySelector('.bx-window-close')
const cartContainer= document.querySelector('.cart-container')

shopCart.addEventListener('click',() => {
  CartContainer.classList.remove('hidde')
})

closeButton.addEventListener('click', ()=>{
  CartContainer.classList.add('hidde')
})


/*-------------- Main Products-----------*/


 document.addEventListener("DOMContentLoaded", ()=>{
  showProducts()
 }
 )

const showProducts =() => {
  const productContainer = document.getElementById("products-content")
      let fragment = ``;
      items.forEach(producto => {
        fragment += 
        `<div class="targetProduct" id= "${producto.id}>
          <div class="productimg">
            <img src="${producto.image}" alt="" class="product">
          </div>
          <div class="productInfo">
            <H2 class="productName">
              ${producto.name}
              <span class="product_stock">|Stock: 5</span>
            </H2>
            <h3 class="price">$${producto.quantity}</h3>
            <button class="add">ADD TO CART</button>
        </div>
        
      </div>`
      })
  
    
    productContainer.innerHTML= fragment
    cartFunctionality()
  }

  /* ------------- funcionalidad del carrito-----------------*/

  let carrito=[]
  function cartFunctionality(){

    const btns= document.querySelectorAll(".add")
    
    btns.forEach(button=> {
      button.addEventListener("click", e => {
         const id= parseInt(e.target.parentElement.previousElementSibling.id);
         const selectedProduct= items.find(item => item.id === id)
         let index= carrito.indexOf(selectedProduct)
    
         if(index !== -1){
          if(carrito[index].quantity <= carrito[index].cantidad){
            alert("No hay stock")
          }else{
            carrito[index].cantidad++
            console.log(e.target)
          }
          
         }else{
          selectedProduct.cantidad=1 
          carrito.push(selectedProduct)
         }
         showProductsinCart(carrito)
      })
    })
    }
    const eliminardelcarrito= (prodId)=>{
      const item= carrito.find((prod) => prod.id === prodId)
      const indice= carrito.indexOf(item)
      carrito.splice(indice, 1)
      console.log(prodId);
      showProductsinCart()
    }

    function showProductsinCart(cart){
      let total= 0
      let contador=0
      const  counterprincipal= document.querySelector(".counterNav")
      const counterinside= document.querySelector(".counterCart")
      const carritoContainer = document.getElementById("cart-products")
      const totalcompras= document.querySelector(".totalCart")
      
      
      let fragmentodecod =``
      
      carrito.forEach(producto => {
        fragmentodecod += `<div class="producto-dentro" id="${producto.id}">
        <img src="./${producto.image}" alt="">
        <div class= "product-information-inside">
        <h2 class="prodtext">${producto.name}</h2>
        <span class="prodtext"> $ ${producto.price}</span>
        <p class="prodtext"> cantidad ${producto.cantidad}</p>
        <button onclick="eliminardelcarrito(${producto.id})" class="button-delete"><i class='bx bxs-trash bx-md'></i></button>
        </div>
      </div>`
        contador+= producto.cantidad
      total+= producto.cantidad * producto.price
      })
      carritoContainer.innerHTML = fragmentodecod
      
      
      counterinside.innerHTML = `${contador} Items selected`
      totalcompras.innerHTML = `your total is $ ${total}`
      
      }
      
      
     