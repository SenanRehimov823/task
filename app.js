const yazi=document.getElementById("yazi")
const inp=document.getElementById("inp")
const inp1=document.getElementById("inp1")
const inp2=document.getElementById("inp2")

inp.addEventListener("click",function(){
    let currentValue = Number(yazi.textContent)-1   
   yazi.textContent=currentValue
     
});
inp1.addEventListener("click", function() {
    yazi.textContent = 0;  
});

inp2.addEventListener("click", function() {
    let currentValue = Number(yazi.textContent)+1  
    yazi.textContent = currentValue;  
});