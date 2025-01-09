export const quantityToogle=(e, id, stock)=>{
    const currentcardElement=document.querySelector(`#card${id}`);
   

    const productQquantityElem=currentcardElement.querySelector('.product-quantity');

    //getting the updated quantity or 1
    let quantity=parseInt(productQquantityElem.getAttribute("data-quantity")) || 1;

    
        if(e.target.className==="increment"){
                if(quantity<stock){
                    quantity+=1;
                    productQquantityElem.textContent=quantity;
                }
                else if(quantity===stock){
                    quantity===stock;  
                }
           }
      if(e.target.className==="decrement"){
            if(quantity>1){
                quantity-=1;
            }   
        }

        productQquantityElem.innerText=quantity;
        productQquantityElem.setAttribute("data-quantity", quantity)
    

 return quantity;

}