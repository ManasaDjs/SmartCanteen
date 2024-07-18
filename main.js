let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name : 'Poori',
        price : 50.00,
        incart : 0
    },
    {
        name : 'Veg fried rice',
        price : 60.00,
        incart : 0

    },
    {
        name : 'Paratha',
        price : 50.00,
        incart : 0
    },
    {
        name : 'Egg fried rice',
        price : 65.00,
        incart : 0
    },
    {
        name : 'Paneer frankie',
        price : 45.00,
        incart : 0
    },
    {
        name : 'Chicken frankie',
        price : 68.00,
        incart : 0
    },
    {
        name : 'Veg Meals',
        price : 50.00,
        incart : 0
    },
    {
        name : 'Dosa',
        price : 35.00,
        inacart : 0
    },
    {
        name : 'Breakfast combo',
        price : 50.00,
        incart : 0
    }
]

for( let i=0; i<carts.length; i++){
    carts[i].addEventListener('click',() => {
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}

function cartNumbers(product){
    let productNumbers = localStorage.getItem('cartNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cartNumbers',productNumbers+1);   
    } else{
        localStorage.setItem('cartNumbers',1);
    }
    setItems(product);
}
function setItems(product){
    let cartItems = localStorage.getItem('productsIncart');
    cartItems = JSON.parse(cartItems);
    if(cartItems != null){
        if (cartItems[product.name] == undefined){
            cartItems = {
                ...cartItems,
                [product.name] : product
            }
        }
        cartItems[product.name].incart +=1;
    } else{
        product.incart=1;
        cartItems ={
            [product.name] : product
        }
    }
    
    localStorage.setItem('productsIncart', JSON.stringify(cartItems)); 
}

function totalCost(product){
    //console.log('the product price is', product.price);
    let cartCost = localStorage.getItem('totalCost');
    console.log('my cart cost', cartCost);

    if (cartCost != null){
        cartCost = parseInt(cartCost);
        localStorage.setItem('totalCost',cartCost + 
        product.price);
    }else{
        localStorage.setItem('totalCost', product.price);
    }
}
function displayCart(){
    let cartItems = localStorage.getItem("productsIncart");
    cartItems = JSON.parse(cartItems);
    let productContainer = document.querySelector
    (".products");
    let cartCost = localStorage.getItem('totalCost');
    //console.log(cartItems);
    if(cartItems && productContainer){
        productContainer.innerHTML=``;
        Object.values(cartItems).map(items =>{
            productContainer.innerHTML += `
            <table class="product-container">
            <tr>
            <td> 
            <div class ="product">   
            <span>${items.name}</span>
            </div>
            </td>
            
            <td>    
            <div class ="price">
            <span>${items.price}</span>
            </div>
            </td>
            <td>  
            <div class ="quantity">  
            <span>${items.incart}</span>
            </div>
            </td>

            <td>    
            <div class ="total">
            <span>${items.incart * items.price}</span>
            </div>
            </td>

            </tr>
            </table>
            `
        });
     productContainer.innerHTML +=`
     <div class ="CartTotalContainer">
        <h4 class="CartTotalTitle">
            CART TOTAL
        </h4>
        <h4 class="CartTotal">
            ${cartCost}.00
            </h4>
    </div>`
    }
}
displayCart();

function emptyCart() {
	if (localStorage.getItem('productsIncart')) {
		// Clear JavaScript sessionStorage by index
		localStorage.clear();
        location.reload();

	}
}