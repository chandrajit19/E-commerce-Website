export const toast=(action, id)=>{
    const newDivElement=document.createElement("div")
     newDivElement.innerHTML=`<div class="toast-box">
         <div class="icon">!</div>
         <p class="update-item"></p>
     </div>
     `
    document.body.append(newDivElement)
    if(action==="deleted"){
         document.querySelector(".update-item").innerHTML=`Item ${id} is deleted`
    }
    else if(action==="added"){
     document.querySelector(".update-item").innerHTML=`Item ${id} is added`
    }
    else{
        document.querySelector(".update-item").innerHTML=`Item ${id} is updated`
    }
   
    setTimeout(()=>(newDivElement.remove()), 1500)
    }
   
