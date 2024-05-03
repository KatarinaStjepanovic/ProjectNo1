const love=document.getElementById("button6");

love.addEventListener("click",flove);


function flove(){
    const slika=document.getElementById("image");
    slika.src="./materials/inlove.png.png";
    slika.alt="ne radi";
   const buttons=document.querySelectorAll(".btn button");
   buttons.forEach(color5);
   buttons.forEach(background5);
   for(let i=0;i<buttons.length;i++){
    if(i%2==0){
   buttons[i].addEventListener("mouseover",bx5);
    } 
    else{
        buttons[i].addEventListener("mouseover",bx51);
    }
}

for(let i=0;i<buttons.length;i++){
    
   buttons[i].addEventListener("mouseout",bx52); 
    
  }
  document.body.style.backgroundColor="#f472b6";
  const pitanje=document.getElementById("question");
  pitanje.innerHTML="Lucky!";
  pitanje.style.color="#9d174d";
  pitanje.style.margin="20px";
  pitanje.style.fontSize="large";
  document.getElementById("menu").style.backgroundColor="#9d174d";
document.getElementById("hello").innerHTML="In love ❤️";
let links=document.getElementById("content").getElementsByTagName("a");
for(let i=0;i<links.length;i++){
 links[i].style.color="#9d174d";
}
   
}
function bx5(){
    this.style.boxShadow="7px 10px 5px white";
    
}
function bx51(){
    this.style.boxShadow="7px 10px 5px #9d174d";
}
function bx52(){
    this.style.boxShadow="none";
}

function color5(button,index){
    if((index+1)%2===0){ 
      button.style.color="#9d174d";
    }
  }




function background5(button,index){
    if(index%2==0){
        button.style.backgroundColor="#9d174d";
    }

}