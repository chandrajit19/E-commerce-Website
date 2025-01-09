// Import necessary modules
import { getCardDataFLS } from "./getCardDataFLS";
import { toast } from "./toast";
import { updateCartValue } from "./updateCartValue";

// Step 1: Fetch initial data from localStorage
getCardDataFLS();


// Step 2: Define the addToCart function
export const addToCart = (e, id, stock, name) => {
    // Step 3: Identify the current product element using its ID
    const currProElement = document.querySelector(`#card${id}`);

    // Step 4: Retrieve the existing cart data from localStorage
    let localStorageProduct = getCardDataFLS();

    // Step 5: Extract product quantity and price from the DOM
    let quantity = +(currProElement.querySelector('.product-quantity').textContent); // Convert string to number
    let price = currProElement.querySelector('.pro-price').textContent;

    // Step 6: Remove currency symbol from the price and convert to number
    let actPrice = +price.slice(1);

    // Step 7: Check for duplicate product in the cart
    let existingPro = localStorageProduct.find(
        (curPro) => curPro.id === id
    );

    if (existingPro) {
        // Step 8: Alert the user if the product already exists in the cart
        
        existingPro.quantity += quantity; // Increase the quantity
        existingPro.totalPrice = actPrice * existingPro.quantity; // Update total price
    
        // Save updated data to local storage
        localStorage.setItem("products", JSON.stringify(localStorageProduct));
        //  in last showing toast
        toast("updated", id)
        return true; 
    }

    // Step 9: Calculate total price based on quantity and price
    let totalPrice = actPrice * quantity;
   

    // Step 10: Add the new product to the localStorage array
    localStorageProduct.push({ id, totalPrice, quantity });
    localStorage.setItem("products", JSON.stringify(localStorageProduct));

   
   
    // Step 11: Update the cart value displayed on the UI
    updateCartValue(localStorageProduct.length);

   //  in last showing toast
    toast("added", id)

};
