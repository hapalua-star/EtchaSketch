


   const array0=new Array(5);
    for(i=0;i<array0.length;i++)                    //creates array of 5 boxes
    {
    const array1=document.createElement('div');
    array1.className=("square");
    container.appendChild(array1);
    
    }
    
    


    
    

const hover1=document.querySelectorAll(".square").forEach(hover1=>{      //click on each box and they
    hover1.addEventListener("click",changeColor =>{                      // change color
        hover1.style.backgroundColor="black";
    })
})

   
   
  