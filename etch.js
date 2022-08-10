const hover1=document.querySelector(".square");
hover1.addEventListener("click", changeColor);


const arr2 = new Array(2);

for (let i = 0; i < arr2.length; i++) {
  arr2[i] = {key: 'value'};
  alert(arr2[i]);
}

// 👇️ [{key: 'value'}, {key: 'value'}]







function changeColor()
{
    hover1.style.backgroundColor = "black";
}