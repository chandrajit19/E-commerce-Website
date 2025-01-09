import products from './api/product.json';
import { getCardDataFLS } from './getCardDataFLS';
import { updateQuantity } from './quantityToogleOfCart';

import { removeProductFromCart } from './removeProductFCart';
import { summaryUpadate } from './summaryUpadate';


// on the basis of the product id inside localStorage, we will get the product details from the product.json array 
let lSProduct= getCardDataFLS();


const mergedArray = lSProduct.map(item => {
   const matchingItem = products.find(ele => ele.id === item.id);
   if (matchingItem) {
     return { ...item, ...matchingItem };
   }
   return item;
 });

         const cartContainerElement=document.querySelector('#productCartContainer')
         const templateContainerElement=document.querySelector('#productTemplateOfCart')

         // function declaration
         const showCardsProduct=()=>{
            cartContainerElement.innerHTML = ""; // Clear existing items

            mergedArray.forEach((currPro)=>{
                  const {id, category, image, name, stock, totalPrice, quantity}=currPro;
                  
                 const productClone= document.importNode(templateContainerElement.content, true)
                  productClone.querySelector(".name").textContent=name;
                  productClone.querySelector(".pro-price").textContent=totalPrice;
                  productClone.querySelector(".cart-img").src=`${image}`;
                  productClone.querySelector(".product-quantity").textContent=quantity;
                  productClone.querySelector(".actualContainer").setAttribute("id", `${id}`)
                  const card= productClone.querySelector('.actualContainer')
              
                  const productQquantityElem=productClone.querySelector('.product-quantity')
                  const proPriceEle=productClone.querySelector('.pro-price')
      
                  productClone.querySelector('.remove-me').addEventListener("click", ()=>{
                     removeProductFromCart(id, card)
                  })


                              // Increment Button
                  productClone.querySelector(".increment").addEventListener("click", () => {
                    updateQuantity(id, "increment", productQquantityElem, proPriceEle, mergedArray, lSProduct);
                  });

                  // Decrement Button
                  productClone.querySelector(".decrement").addEventListener("click", () => {
                    updateQuantity(id, "decrement", productQquantityElem, proPriceEle, mergedArray, lSProduct);
                  });

                  cartContainerElement.append(productClone)
               
               
                  
            })
      
         }
      
     showCardsProduct()
// updating the total price in summary
      summaryUpadate();
         
               
            
      
    