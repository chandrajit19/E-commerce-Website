import { summaryUpadate } from "./summaryUpadate";

export const updateQuantity = (id, action, productQuantityElem, proPriceElem, mergedArray) => {
  const lSProduct = JSON.parse(localStorage.getItem("products")) || [];
  const product = mergedArray.find((item) => item.id === id);

  if (!product) {
    console.error("Product not found!");
    return;
  }

  const { stock, price } = product;

  if (action === "increment" && product.quantity < stock) {
    product.quantity += 1;
  } else if (action === "decrement" && product.quantity > 1) {
    product.quantity -= 1;
  } else {
    console.warn("Invalid operation: Either stock exceeded or quantity is 1.");
    return;
  }

  // Update totalPrice
  product.totalPrice = product.quantity * price;

  // Update UI
  productQuantityElem.textContent = product.quantity;
  proPriceElem.textContent = product.totalPrice;

  // Update Local Storage
  const updatedLocalStorage = lSProduct.map((item) =>
    item.id === id
      ? { id: item.id,  totalPrice: product.totalPrice, quantity: product.quantity }
      : item
  );
  localStorage.setItem("products", JSON.stringify(updatedLocalStorage));



  // updating the total price in summary
        summaryUpadate();
           
};
