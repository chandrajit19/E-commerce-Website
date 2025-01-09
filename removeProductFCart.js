import { getCardDataFLS } from "./getCardDataFLS";
import { toast } from "./toast";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart=(id, card)=>{

    let lSProduct= getCardDataFLS();
   
    const deleted=lSProduct.filter((curObj)=>{
       return curObj.id!=Number(id)
      })
   
 
      localStorage.setItem("products", JSON.stringify(deleted));
      const obj= getCardDataFLS(); 
      updateCartValue(obj.length)
      card.remove();
      toast("deleted", id);
  }