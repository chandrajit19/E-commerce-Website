import './style.css'
import products from './api/product.json'
import { displayProduct } from './productCard';
  
// call the function to get the products to display in product-container
displayProduct(products);

