import { updateCartValue } from "./updateCartValue";

export const getCardDataFLS=()=>{
    let proData = JSON.parse(localStorage.getItem("products") || "[]");

     updateCartValue(proData.length);
    return proData;
}