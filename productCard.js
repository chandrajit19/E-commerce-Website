import { addToCart } from "./addToCart";
import { quantityToogle } from "./quantityToogle";

// Here product container reference
const productContainer = document.querySelector(".product-container");
// Access of the product template
const productTemplate = document.querySelector("#product-template");

export const displayProduct = (products) => {
   // Check if product container or template exists
   if (!productContainer || !productTemplate) {return;}

   
   // Iterate over the products and display each one
   products.forEach((curElemnt) => {
      const { brand, category, description, id, image, price, title, name, stock } = curElemnt;

      // Making deep clone of the template
      const productClone = document.importNode(productTemplate.content, true);

      // Giving unique card id to each card
      productClone.querySelector("#cardId").setAttribute("id", `card${id}`);

      // Setting content
      productClone.querySelector(".product-name").textContent = name;
      productClone.querySelector(".product_name").textContent = category;
      productClone.querySelector(".pro-description").textContent = description;
      productClone.querySelector(".brand-name").textContent = brand;
      productClone.querySelector(".pro-price").textContent = `₹${price}`;
      productClone.querySelector(".pro-actual-price").textContent = `₹${price * 2}`;
      productClone.querySelector(".pro-stock").textContent = stock;
      productClone.querySelector(".card-img-sec").src = image;

      // Adding event listener to the card-btn
      productClone.querySelector(".card-btn").addEventListener("click", (e) => {
         // Calling the function to count quantity
         quantityToogle(e, id, stock);
      });

      // Store the product quantity, price, and id in local storage
      productClone.querySelector(".cart_btn").addEventListener("click", (e) => {
         addToCart(e, id, stock, name);
      });

      // Append the clone to the product container
      productContainer.append(productClone);
   });
};
