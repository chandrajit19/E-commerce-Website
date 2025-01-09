import { getCardDataFLS } from "./getCardDataFLS";

export const summaryUpadate=()=>{

    let lSProduct= getCardDataFLS();
  
    const totalSummary=lSProduct.reduce((accumalator, currentValue)=>{
       return  accumalator+ currentValue.totalPrice
    },0)
 
    document.querySelector(".productSubTotal").textContent=`₹${totalSummary}`
    document.querySelector(".finalPrice").textContent=`₹${totalSummary+60}`
}