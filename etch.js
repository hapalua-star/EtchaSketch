
   let x=16;  //number of squares in one row and column
   
   
   
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


   x=256/(x);


   console.log(x);
   
   document.getElementById("container").innerHTML = ""; //clears the container div

   
   for (i=0;i<x;i++)
   {
     
     let squareSize = document.getElementById('container').clientWidth / x;
     const newDiv=document.createElement('div');
     const newRow=container.appendChild(newDiv)    
     for(j=0;j<x;j++)
     {
        const newSquare=document.createElement('div');
        newSquare.className="square";
        newRow.appendChild(newSquare);
        
        newSquare.classList.add("square-grid");

        newSquare.style.height=squareSize+"px";   //hardcode squaresize within javascript file.
        newSquare.style.width=squareSize+"px";
     }
  }

  
 /* let squareSize = document.getElementById('grid').clientWidth / size;
  //Creating the square and defining his size
  for(let i=1 ; i<=size*size;i++){ 
      let square = document.createElement('div')
      grid.appendChild(square);
      square.classList.add('square-grid');
      square.style.width = squareSize + "px";
      square.style.height = squareSize + "px"; */          
  


   hover();
   

}                                                                        //make 16 to 14 and then maintain
                                                                        //the same area of squares in the
                                                                        //grid.
   
  