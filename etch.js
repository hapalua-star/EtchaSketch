
   document.addEventListener(`DOMContentLoaded`,function(){
   
   createBoard(16);  

   });
  
  function createBoard(size)
  {
   console.log("hello world");
   let grid=document.getElementById("board");
   grid.style.gridTemplateColumns= `repeat(${size},1fr)`;
   grid.style.gridTemplateRows= `repeat(${size},1fr)`;
  
  
  
   let numDivs=size*size;
  
  
   for (i=0;i<numDivs;i++)
   {
   
     let newDiv=document.createElement('div');
     grid.insertAdjacentElement("beforeend",newDiv);
     newDiv.addEventListener("mouseover", function(){
      newDiv.style.backgroundColor="black";
     })

     
   }
   }
   
                                                        




   




function newSize()
{
  
  let size=prompt("Please enter size of grid you want(under 100)");
   
  
   
   document.getElementById("board").innerHTML=" ";
  

   createBoard(size);
   
   
   
   
}
     
  
  

                                                                      