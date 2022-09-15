
   let x=16;
   
   
   const array1=new Array(x**2);   //make this a variable
   for (x=0;x<array1.length;x++)
   {
     const x=document.createElement('div');
     x.className="square";             
     container.appendChild(x);
   }

   


const hover1=document.querySelectorAll(".square").forEach(hover1=>{      //mouseover on each box and they
    hover1.addEventListener("mouseover",changeColor =>{                      // change color
        hover1.style.backgroundColor="black";
    })
})
                                                                         
function newSize()
{
  
  let size=prompt("Please enter size of grid you want(under 100)");
   x=size;
   console.log(x);
   
   document.getElementById("container").innerHTML = "";


   const array1=new Array(x**2);   //make this a variable              //need to remove current grid and 
   for (x=0;x<array1.length;x++)                                       //put new one in place of it.
   {
     const x=document.createElement('div');
     x.className="square";             
     container.appendChild(x);
   }


}                                                                        //make 16 to 14 and then maintain
                                                                        //the same area of squares in the
                                                                        //grid.
   
  