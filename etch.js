
   let x=5;
   
   
   
   for (i=0;i<x;i++)
   {
   
     const newDiv=document.createElement('div');
     const newRow=container.appendChild(newDiv)    
     for(j=0;j<x;j++)
     {
        const newSquare=document.createElement('div');
        newSquare.className="square";
        newRow.appendChild(newSquare);
     }
     hover();
  }

   
function hover()
{

const hover1=document.querySelectorAll(".square").forEach(hover1=>{      //mouseover on each box and they
    hover1.addEventListener("mouseover",changeColor =>{                      // change color
        hover1.style.backgroundColor="black";
    })
})
}                                                                        

function newSize()
{
  
  let size=prompt("Please enter size of grid you want(under 100)");
   x=size;
   console.log(x);
   
   document.getElementById("container").innerHTML = ""; //clears the container div


   for (i=0;i<x;i++)
   {
   
     const newDiv=document.createElement('div');
     const newRow=container.appendChild(newDiv)    
     for(j=0;j<x;j++)
     {
        const newSquare=document.createElement('div');
        newSquare.className="square";
        newRow.appendChild(newSquare);
     }
  }

  hover();
   

}                                                                        //make 16 to 14 and then maintain
                                                                        //the same area of squares in the
                                                                        //grid.
   
  