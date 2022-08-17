


   const array1=new Array(15);
   for (j=0;j<array1.length;j++)
   {
     const div=document.createElement('div');
     document.body.appendChild(div);              
     div.className="square";

    
   }

   

    
    

const hover1=document.querySelectorAll(".square").forEach(hover1=>{      //click on each box and they
    hover1.addEventListener("click",changeColor =>{                      // change color
        hover1.style.backgroundColor="black";
    })
})

   
   
  